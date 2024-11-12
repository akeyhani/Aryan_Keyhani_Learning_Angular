import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Games } from '../Games';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = '/api/games'; // URL to web API

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  // Method to get all games
  getAllGames(): Observable<Games[]> {
    return this.http.get<Games[]>(this.apiUrl).pipe(
      catchError(this.handleError<Games[]>('getAllGames', []))
    );
  }

  // Method to get a game by ID
  getGameById(id: number): Observable<Games | undefined> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Games>(url).pipe(
      catchError(this.handleError<Games>(`getGameById id=${id}`))
    );
  }

  // Method to add a new game
  addGame(newGame: Games): Observable<Games> {
    return this.http.post<Games>(this.apiUrl, newGame, this.httpOptions).pipe(
      catchError(this.handleError<Games>('addGame'))
    );
  }

  // Method to update an existing game
  updateGame(updatedGame: Games): Observable<any> {
    return this.http.put(`${this.apiUrl}/${updatedGame.id}`, updatedGame, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateGame'))
    );
  }

  // Method to delete a game by ID
  removeGameById(id: number): Observable<Games> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Games>(url, this.httpOptions).pipe(
      catchError(this.handleError<Games>('removeGameById'))
    );
  }

  // Method to generate a new unique ID (used only if adding locally)
  generateNewId(): number {
    return Math.floor(Math.random() * 10000);
  }

  // Handle HTTP operation that failed, log the error, and return a safe result
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
