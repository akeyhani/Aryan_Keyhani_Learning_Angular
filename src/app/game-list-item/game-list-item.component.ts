import { Component, Input } from '@angular/core';
import { NgForOf, NgClass } from '@angular/common';

@Component({
  selector: 'app-game-list-item',
  standalone: true,
  imports: [NgForOf, NgClass],
  templateUrl: './game-list-item.component.html',
  styleUrl: './game-list-item.component.css'
})
export class GameListItemComponent {
  @Input() game!: { title: string; genre: string; developer: string; releaseDate: string; rating: string };
}
