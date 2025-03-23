import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Game } from '../models/game.model';
import { environment } from '../../../environments/environment';
const base_url = environment.backendUrl;
@Injectable({
  providedIn: 'root'
})
export class GameService {
 

  constructor(private readonly http: HttpClient) {}
 
  getGames(page: number, genres?: string): Observable<any> {
    let url = `${base_url}/games?page=${page}`;
    
    if (genres) {
      url += `&genres=${genres}`;
    }
  
    return this.http.get(url);
  }
  

  // Buscar juegos desde el backend
  searchGames(query: string): Observable<Game[]> {
    const url = `${base_url}/api/search?query=${encodeURIComponent(query)}`;
    return this.http.get<Game[]>(url);
  }
  
  // Obtener detalles de un juego específico desde el backend
  getGameDetails(id: number): Observable<Game> {
    return this.http.get<Game>(`${base_url}/${id}`);
  }
}


