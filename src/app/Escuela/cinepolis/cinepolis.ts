import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ICompraCine } from '../compra-cine'; 

@Component({
  selector: 'app-cinepolis',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cinepolis.html',
  styleUrl: './cinepolis.css' 
})
export class CinepolisComponent implements OnInit {
  
  cinepolisForm!: FormGroup;

  datosCompra!: ICompraCine;

  valorAPagar: number = 0;
  mensajeError: string = '';

  ngOnInit(): void {
    this.cinepolisForm = new FormGroup({
      nombre: new FormControl(''),
      cantidadCompradores: new FormControl(1),
      cantidadBoletas: new FormControl(1),
      tarjetaCineco: new FormControl('no')
    });
  }

  procesar(): void {
    this.mensajeError = '';
    this.valorAPagar = 0;

    this.datosCompra = this.cinepolisForm.value as ICompraCine;

    if (this.datosCompra.cantidadBoletas > (this.datosCompra.cantidadCompradores * 7)) {
      this.mensajeError = 'Error: No se pueden comprar más de 7 boletas por persona.';
    } else {
      
      this.valorAPagar = this.datosCompra.cantidadCompradores * 12;

      if (this.datosCompra.cantidadBoletas > 5) {
        this.valorAPagar = this.valorAPagar - (this.valorAPagar * 0.15);
      } else if (this.datosCompra.cantidadBoletas >= 3 && this.datosCompra.cantidadBoletas <= 5) {
        this.valorAPagar = this.valorAPagar - (this.valorAPagar * 0.10);
      }

      if (this.datosCompra.tarjetaCineco === 'si') {
        this.valorAPagar = this.valorAPagar - (this.valorAPagar * 0.10);
      }
    }
  }

  salir(): void {
    this.cinepolisForm.reset({
      nombre: '',
      cantidadCompradores: 1,
      cantidadBoletas: 1,
      tarjetaCineco: 'no'
    });
    this.valorAPagar = 0;
    this.mensajeError = '';
  }
}