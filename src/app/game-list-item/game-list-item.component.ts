import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Games } from '../Games';
import { GameService } from '../Services/game.service';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
  imports: [NgOptimizedImage, NgIf],
  styleUrls: ['./game-list-item.component.css'],
  standalone: true
})
export class GameListItemComponent {
  @Input() gameItem?: Games;
  errorMessage: string | null = null;  // Store error messages

  constructor(private router: Router, private gameService: GameService) {}

  // Navigate to the edit page for the selected game
  onEdit(): void {
    if (this.gameItem) {
      this.router.navigate(['/modify-list-item'], { queryParams: { id: this.gameItem.id } });
    }
  }

  // Method to handle delete button click
  onDelete(id?: number): void {
    if (id) {
      this.gameService.removeGameById(id).subscribe({
        next: () => {
          console.log(`Game with ID ${id} deleted`);
          this.errorMessage = null;  // Reset error if deletion is successful
        },
        error: err => {
          console.error('Error deleting game:', err);
          this.errorMessage = "Failed to delete game. Please try again.";
        }
      });
    }
  }
}
