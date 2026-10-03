import { Component, OnInit } from '@angular/core';
import { Zodiaco } from './zodiaco/zodiaco';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router'; // <-- 1. Agrega esta importación en la parte superior

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Zodiaco, RouterOutlet], // <-- 2. Agrega RouterOutlet dentro de los corchetes de imports
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'segundoparcialAngular';

  ngOnInit(): void {
    initFlowbite();
  }
}