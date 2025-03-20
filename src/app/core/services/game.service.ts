import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Game } from '../models/game.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private backendUrl = environment.backendUrl; // ✅ Usar la variable de environment

  constructor(private http: HttpClient) {}

  // Obtener todos los juegos desde el backend
  getGames(page: number = 1): Observable<any> {
    return this.http.get(`${this.backendUrl}/games?page=${page}`);
  }
  

  // Buscar juegos desde el backend
  searchGames(query: string): Observable<Game[]> {
    const url = `http://localhost:8080/api/search?query=${encodeURIComponent(query)}`;
    return this.http.get<Game[]>(url);
  }
  
  // Obtener detalles de un juego específico desde el backend
  getGameDetails(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.backendUrl}/${id}`);
  }
}


