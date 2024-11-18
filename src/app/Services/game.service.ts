import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Games } from '../Games';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'api/games'; // Endpoint provided by InMemoryDataService

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  // Get all games
  getAllGames(): Observable<Games[]> {
    return this.http.get<Games[]>(this.apiUrl).pipe(
      catchError(this.handleError<Games[]>('getAllGames', []))
    );
  }

  // Add a new game
  addGame(newGame: Games): Observable<Games> {
    return this.http.post<Games>(this.apiUrl, newGame, this.httpOptions).pipe(
      catchError(this.handleError<Games>('addGame'))
    );
  }

  // Update an existing game
  updateGame(updatedGame: Games): Observable<Games> {
    const url = `${this.apiUrl}/${updatedGame.id}`;
    return this.http.put<Games>(url, updatedGame, this.httpOptions).pipe(
      catchError(this.handleError<Games>('updateGame'))
    );
  }

  // Remove a game by ID
  removeGameById(id: number): Observable<Games> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Games>(url, this.httpOptions).pipe(
      catchError(this.handleError<Games>('removeGameById'))
    );
  }

  // Get a game by ID
  getGameById(gameId: number): Observable<Games> {
    const url = `${this.apiUrl}/${gameId}`;
    return this.http.get<Games>(url).pipe(
      catchError(this.handleError<Games>('getGameById'))
    );
  }

  // Handle HTTP operation that failed
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
