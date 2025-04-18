import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  searchQuery: string = '';
  mostrarBuscador = false;
  sidebarOpen = false;  // Nueva propiedad para controlar visibilidad del sidebar

  constructor(private router: Router) {}

  toggleBuscador() {
    this.mostrarBuscador = !this.mostrarBuscador;
  }
  

  buscarJuego() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/buscar'], { queryParams: { q: this.searchQuery } });
      this.closeSidebar(); // Cierra el sidebar al realizar búsqueda (solo afecta en móviles)
    }
  }
  // Nuevos métodos para control del sidebar
  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }



}


