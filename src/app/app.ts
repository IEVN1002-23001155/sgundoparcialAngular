import { Component, OnInit } from '@angular/core';
import { Zodiaco } from './zodiaco/zodiaco';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router'; // <-- 1. Agrega esta importación en la parte superior
import { Navbar } from './navbar/navbar';
import { Usuario } from './formularios/usuario/usuario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Zodiaco, RouterOutlet,Navbar,Usuario], // <-- 2. Agrega RouterOutlet dentro de los corchetes de imports
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'segundoparcialAngular';

  ngOnInit(): void {
    initFlowbite();
  }
}