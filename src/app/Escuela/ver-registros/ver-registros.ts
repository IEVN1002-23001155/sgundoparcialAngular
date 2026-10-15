import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ICompraCine } from '../compra-cine'; 

@Component({
  selector: 'app-ver-registros',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ver-registros.html',
  styleUrl: './ver-registros.css'
})
export class VerRegistrosComponent implements OnInit {
  ventas: ICompraCine[] = [];
  formularioCine!: FormGroup;
  indiceEdicionCine: number = -1;
  
  nuevaVenta: ICompraCine = { nombre: '', cantidadCompradores: 1, cantidadBoletas: 1, tarjetaCineco: 'no' };
  valorAPagar: number = 0;

  ngOnInit(): void {
    this.cargarDatos();

    this.formularioCine = new FormGroup({
      nombre: new FormControl(''),
      cantidadCompradores: new FormControl(1),
      cantidadBoletas: new FormControl(1),
      tarjetaCineco: new FormControl('no')
    });
  }

  cargarDatos(): void {
    if (localStorage.getItem('ventasCine')) {
      this.ventas = JSON.parse(localStorage.getItem('ventasCine')!);
    }
  }

  eliminarVenta(index: number): void {
    this.ventas.splice(index, 1);
    localStorage.setItem('ventasCine', JSON.stringify(this.ventas));
  }

  abrirEdicionVenta(index: number): void {
    this.indiceEdicionCine = index;
    this.formularioCine.patchValue({
      nombre: this.ventas[index].nombre,
      cantidadCompradores: this.ventas[index].cantidadCompradores,
      cantidadBoletas: this.ventas[index].cantidadBoletas,
      tarjetaCineco: this.ventas[index].tarjetaCineco
    });
  }

  guardarEdicionVenta(): void {
    this.nuevaVenta.nombre = this.formularioCine.value.nombre || '';
    this.nuevaVenta.cantidadCompradores = (this.formularioCine.value.cantidadCompradores * 1) || 1;
    this.nuevaVenta.cantidadBoletas = (this.formularioCine.value.cantidadBoletas * 1) || 1;
    this.nuevaVenta.tarjetaCineco = this.formularioCine.value.tarjetaCineco || 'no';

    if (this.nuevaVenta.cantidadBoletas > (this.nuevaVenta.cantidadCompradores * 7)) {
      alert('Error: No se pueden comprar más de 7 boletas por persona.');
    } else {
      this.valorAPagar = this.nuevaVenta.cantidadBoletas * 12;

      if (this.nuevaVenta.cantidadBoletas > 5) {
        this.valorAPagar = this.valorAPagar - (this.valorAPagar * 0.15);
      } else if (this.nuevaVenta.cantidadBoletas >= 3 && this.nuevaVenta.cantidadBoletas <= 5) {
        this.valorAPagar = this.valorAPagar - (this.valorAPagar * 0.10);
      }

      if (this.nuevaVenta.tarjetaCineco === 'si') {
        this.valorAPagar = this.valorAPagar - (this.valorAPagar * 0.10);
      }

      this.ventas[this.indiceEdicionCine] = {
        nombre: this.nuevaVenta.nombre,
        cantidadCompradores: this.nuevaVenta.cantidadCompradores,
        cantidadBoletas: this.nuevaVenta.cantidadBoletas,
        tarjetaCineco: this.nuevaVenta.tarjetaCineco,
        totalPagar: this.valorAPagar
      } as any; 
      localStorage.setItem('ventasCine', JSON.stringify(this.ventas));
      this.indiceEdicionCine = -1;
    }
  }

  cerrarEdicionVenta(): void {
    this.indiceEdicionCine = -1;
  }
}