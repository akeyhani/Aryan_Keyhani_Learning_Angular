import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Games } from '../Games';  // Ensure correct import
import { GameService } from '../Services/game.service';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
  imports: [NgOptimizedImage],
  styleUrls: ['./game-list-item.component.css'],
  standalone: true
})
export class GameListItemComponent {
  @Input() gameItem?: Games;  // Declare gameItem as an input property of type Games

  constructor(private router: Router, private gameService: GameService) {}

  // Method to handle edit button click
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
          // Additional handling can be added here if needed, e.g., refreshing a parent list
        },
        error: err => console.error('Error deleting game:', err)
      });
    }
  }
}
