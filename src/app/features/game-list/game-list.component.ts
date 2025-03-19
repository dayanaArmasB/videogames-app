import { Component, OnInit } from '@angular/core';
import { GameService } from '../../core/services/game.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [RouterModule,CommonModule,LoaderComponent],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent implements OnInit {
  games: any[] = [];
  isLoading: boolean = true;
  categoria: string = '';
  

  constructor(private gameService: GameService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoria = params.get('categoria') || '';

      this.loadGames();
    });
  }

  loadGames() {
    this.isLoading = true;

    this.gameService.getGames().subscribe(
      (data) => {
        this.games = data.results; // Obtiene los juegos de la API
        this.isLoading = false;
      },
      (error) => {
        console.error('❌ Error al obtener juegos:', error);
        this.isLoading = false;
      }
    );
  }


}

