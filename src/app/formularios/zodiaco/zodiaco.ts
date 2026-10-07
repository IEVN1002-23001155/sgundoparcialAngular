import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  imports: [CommonModule, FormsModule],
  templateUrl: './zodiaco.html',
  styleUrl: './zodiaco.css'
})
export class Zodiaco {
  nombreUsr: string = '';
  pat: string = '';
  mat: string = '';
  d: string = '';
  m: string = '';
  a: string = '';
  genero: string = ''; 

  completo: string = '';
  anios: number = 0;
  animal: string = '';

  foto: string = ''; 
  tamanioImg: number = 120;
  verResultado: boolean = false; 

  calcularSigno(): void {
    this.completo = this.nombreUsr + ' ' + this.pat + ' ' + this.mat;
    this.anios = 2026 - parseInt(this.a); 
    this.verResultado = true; 

    const residuo = parseInt(this.a) % 12;

    if (residuo === 0) {
      this.animal = 'Mono';
      this.foto = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f412.png';
    } else if (residuo === 1) {
      this.animal = 'Gallo';
      this.foto = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f413.png';
    } else if (residuo === 2) {
      this.animal = 'Perro';
      this.foto = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f415.png';
    } else if (residuo === 3) {
      this.animal = 'Cerdo';
      this.foto = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f416.png';
    } else if (residuo === 4) {
      this.animal = 'Rata';
      this.foto = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f400.png';
    } else if (residuo === 5) {
      this.animal = 'Buey';
      this.foto = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f402.png';
    } else if (residuo === 6) {
      this.animal = 'Tigre';
      this.foto = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f405.png';
    } else if (residuo === 7) {
      this.animal = 'Conejo';
      this.foto = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f407.png';
    } else if (residuo === 8) {
      this.animal = 'Dragón';
      this.foto = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f409.png';
    } else if (residuo === 9) {
      this.animal = 'Serpiente';
      this.foto = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f40d.png';
    } else if (residuo === 10) {
      this.animal = 'Caballo';
      this.foto = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f40e.png';
    } else {
      this.animal = 'Cabra';
      this.foto = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f410.png';
    }
  }
}
