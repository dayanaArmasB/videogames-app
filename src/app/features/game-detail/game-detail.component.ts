import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GameService } from '../../core/services/game.service';
import { CommonModule } from '@angular/common';
import { Game } from '../../core/models/game.model';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [CommonModule,RouterModule,LoaderComponent],
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.css'
})

export class GameDetailComponent {
  game: Game | null = null;  
  genres: string = 'Sin género';
  platforms: string = 'Sin plataforma';
  isLoading: boolean = true; // ✅ Inicia en true para mostrar el loader

  constructor(
    private route: ActivatedRoute, 
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('id'); // Obtiene el ID de la URL
    if (gameId) {
      const gameIdNumber = parseInt(gameId, 10); // Convierte el ID a número
      if (!isNaN(gameIdNumber)) {
        this.gameService.getGameDetails(gameIdNumber).subscribe(
          (data: Game) => {
            if (data && data.name) {
              this.game = {
                id: data.id,
                name: data.name,
                description: data.description,
                released: data.released,
                background_image: data.background_image || '',
                genres: data.genres || [],
                platforms: data.platforms || []
              };

              // Procesar géneros
              this.genres = this.game.genres.length > 0
                ? this.game.genres.map((g) => g.name).join(', ')
                : 'Sin género';

              // Procesar plataformas
              this.platforms = this.game.platforms.length > 0
                ? this.game.platforms.map((p) => p.platform.name).join(', ')
                : 'Sin plataforma';
            } else {
              console.error("La API no devolvió un juego válido:", data);
            }
            this.isLoading = false; // ✅ Asegura que se oculta el loader
          },
          (error) => {
            console.error("Error al obtener detalles del juego:", error);
            this.isLoading = false; // ✅ Oculta el loader en caso de error
          }
        );
      } else {
        console.error("El ID del juego no es un número válido:", gameId);
        this.isLoading = false; // ✅ Evita que el loader quede activo
      }
    } else {
      console.error("No se encontró el ID del juego en la URL.");
      this.isLoading = false; // ✅ Evita que el loader quede activo
    }
  }
}

  