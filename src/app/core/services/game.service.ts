import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private backendUrl = 'http://localhost:8080/api'; // URL de tu backend en Spring Boot

  constructor(private http: HttpClient) {}

  // Obtener todos los juegos desde el backend
  getGames(): Observable<any> {
    return this.http.get(`${this.backendUrl}/games`);
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


