import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Games } from './Games';

export class CustomValidators {
  // Validator to ensure ID is a positive integer with no letters
  static positiveNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isValid = /^[1-9]\d*$/.test(control.value);
      return isValid ? null : { positiveNumber: true };
    };
  }

  // Validator to check for special characters in title
  static noSpecialChars(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isValid = /^[a-zA-Z0-9\s]+$/.test(control.value);  // Allows letters, numbers, and spaces only
      return isValid ? null : { noSpecialChars: true };
    };
  }

  // Validator to ensure the ID and title are unique in the game list
  static uniqueGame(gameList: Games[], field: 'id' | 'title'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isDuplicate = gameList.some(game => game[field] === control.value);
      return isDuplicate ? { unique: true } : null;
    };
  }
}
