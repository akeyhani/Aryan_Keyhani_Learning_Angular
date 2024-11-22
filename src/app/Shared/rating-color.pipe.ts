import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingColor',
  standalone: true
})
export class RatingColorPipe implements PipeTransform {

  constructor() {
    console.log("Custom Pipe Initialized");
  }

  transform(rating: string): string {
    const numericRating = parseFloat(rating);
    if (numericRating >= 8) {
      return 'text-success';
    } else if (numericRating >= 5) {
      return 'text-warning';
    } else {
      return 'text-danger';
    }
  }
}
