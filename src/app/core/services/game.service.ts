import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Game } from '../models/game.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly backendUrl = environment.backendUrl;  

  constructor(private readonly http: HttpClient) {}
 
  getGames(page: number, genres?: string): Observable<any> {
    let url = `${this.backendUrl}/games?page=${page}`;
    
    if (genres) {
      url += `&genres=${genres}`;
    }
  
    return this.http.get(url);
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


