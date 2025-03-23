import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { NoResultComponent } from '../../shared/no-result/no-result.component';
import { GameService } from '../../core/services/game.service';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { Game } from '../../core/models/game.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,NoResultComponent,FormsModule,LoaderComponent,RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  isLoading: boolean = true; // ✅ Inicia en true para mostrar el loader
  searchResults: any[] = [];
  noResults = false;
  searchQuery: string = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly gameService: GameService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'] || '';
      if (this.searchQuery) {
        this.buscarJuego();
      }
    });
  }
  buscarJuego(): void {
    if (!this.searchQuery.trim()) return;
  
    this.isLoading = true;  // Activar loader antes de la búsqueda
    this.searchResults = []; // Vaciar resultados previos
  
    this.gameService.searchGames(this.searchQuery).subscribe(
      games => {
        this.isLoading = false;  // Desactivar loader después de la respuesta
  
        if (!games || !Array.isArray(games)) {
          this.searchResults = [];
          this.noResults = true;
        } else {
          this.searchResults = games;
          this.noResults = games.length === 0;
        }
      },
      error => {
        console.error("Error al obtener los juegos:", error);
        this.isLoading = false;  // Desactivar loader en caso de error
        this.searchResults = [];
        this.noResults = true;
      }
    );
  }
  
}
