import { Component } from '@angular/core';
import { GameService } from '../../core/services/game.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [RouterModule,CommonModule,LoaderComponent,PaginatorComponent],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent{
  games: any[] = [];
  isLoading: boolean = true;
  categoria: string = '';
  totalGames: number = 0; // Total de juegos (lo devuelve RAWG.io)
  pageSize: number = 30; // Juegos por página
  currentPage: number = 1; // Página actual

  constructor(private readonly gameService: GameService, 
              private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoria = params.get('categoria') || '';
      this.loadGames(this.currentPage); // Cargar juegos con paginación
    });
  }

  loadGames(page: number) {
    this.isLoading = true;
    this.gameService.getGames(page,this.categoria).subscribe(
      (data) => {
        this.games = data.results; // Obtiene los juegos de la API
        this.totalGames = data.count; // RAWG.io devuelve el total de juegos
        this.currentPage = page;
        this.isLoading = false;
      },
      (error) => {
        console.error('❌ Error al obtener juegos:', error);
        this.isLoading = false;
      }
    );
  }

  onPageChange(page: number) {
    this.loadGames(page);
  }


}

