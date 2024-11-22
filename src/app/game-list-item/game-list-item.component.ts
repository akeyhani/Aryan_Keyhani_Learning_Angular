import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Games } from '../Games';
import { GameService } from '../Services/game.service';
import { DatePipe, NgOptimizedImage, TitleCasePipe, UpperCasePipe } from "@angular/common";
import { RatingColorPipe } from "../Shared/rating-color.pipe";
import { HoverHighlightDirective } from '../directives/hover-highlight.directive'; // Import the directive
import { ShowDetailsOnHoverDirective } from '../Shared/show-details-on-hover.directive'; // Import the tooltip directive

@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
  imports: [
    RatingColorPipe,
    TitleCasePipe,
    UpperCasePipe,
    DatePipe,
    HoverHighlightDirective, // Add the HoverHighlightDirective
    ShowDetailsOnHoverDirective // Add the ShowDetailsOnHoverDirective
  ],
  styleUrls: ['./game-list-item.component.css'],
  standalone: true
})
export class GameListItemComponent {
  @Input() gameItem?: Games; // Declare gameItem as an input property of type Games

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
        },
        error: err => console.error('Error deleting game:', err)
      });
    }
  }
}
