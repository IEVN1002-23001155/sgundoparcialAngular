import { Component, OnInit } from '@angular/core';
import { IAlumnos } from '../alumnos'; 
import { FormGroup,FormControl,FormsModule, ReactiveFormsModule } 
from '@angular/forms';
import { materialize } from 'rxjs';
import { core } from '@angular/compiler';

@Component({
  imports: [FormsModule,ReactiveFormsModule],
  selector: 'app-lista-alumnos',
  styleUrl: './lista-alumnos.css',
  templateUrl: './lista-alumnos.html',
})
export class ListaAlumnos implements OnInit {
  formulario:FormGroup

  alumnos: IAlumnos[] = [];

  nuevoAlmuno: IAlumnos = {
    matricula: '',
    nombre: '',
    correo: '',
    materia: ''
  };

  ngOnInit(): void {
    this.cargarAlumno();
    this.formulario=new FormGroup({
      matricula: new FormControl(''),
      nombre:new FormControl(''),
      correo:new FormControl(''),
      materia:new FormControl(''),
    })
  }

  muestraAlumnos():void{
    this.nuevoAlmuno.matricula=this.formulario.value.matricula
    this.nuevoAlmuno.nombre=this.formulario.value.nombre
    this.nuevoAlmuno.correo=this.formulario.value.correo
    this.nuevoAlmuno.materia=this.formulario.value.materia
  }

  cargarAlumno(): void {
  }
}