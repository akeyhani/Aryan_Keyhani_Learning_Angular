import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Games } from '../Games';
import { gameList } from '../Shared/Models/mock-game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private games: Games[] = [...gameList]; // Define the games array as private

  constructor() {}

  // Get all games
  getAllGames(): Observable<Games[]> {
    return of(this.games);
  }

  // Add a new game
  addGame(newGame: Games): Observable<Games> {
    newGame.id = this.generateNewId();
    this.games.push(newGame);
    return of(newGame);
  }

  // Update an existing game
  updateGame(updatedGame: Games): Observable<Games | undefined> {
    const index = this.games.findIndex((game) => game.id === updatedGame.id);
    if (index !== -1) {
      this.games[index] = updatedGame;
      return of(updatedGame);
    }
    return of(undefined);
  }

  // Remove a game by ID
  removeGameById(id: number): Observable<Games | undefined> {
    const index = this.games.findIndex((game) => game.id === id);
    if (index !== -1) {
      const removedGame = this.games.splice(index, 1)[0];
      return of(removedGame);
    }
    return of(undefined);
  }

  // Get a game by ID
  getGameById(gameId: number): Observable<Games | undefined> {
    const game = this.games.find((game) => game.id === gameId);
    return of(game);
  }

  // Generate a new unique ID
  generateNewId(): number {
    return this.games.length > 0
      ? Math.max(...this.games.map((game) => game.id)) + 1
      : 1;
  }

  // Expose games array for validation purposes (read-only)
  getGamesArray(): Games[] {
    return [...this.games];
  }
}
