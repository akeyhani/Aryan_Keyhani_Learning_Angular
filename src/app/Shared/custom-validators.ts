import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Games } from '../Games';

export class CustomValidators {

  // Validator to check if the value is a positive number
  static positiveNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isPositive = Number(control.value) > 0;
      return isPositive ? null : { positiveNumber: true };
    };
  }

  // Validator to prevent special characters in the title
  static noSpecialChars(): ValidatorFn {
    const regex = /^[a-zA-Z0-9 ]*$/;  // Allows only alphanumeric characters and spaces
    return (control: AbstractControl): ValidationErrors | null => {
      const isValid = regex.test(control.value);
      return isValid ? null : { noSpecialChars: true };
    };
  }

  // Validator to ensure the id or title is unique in the game list
  static uniqueGame(gameList: Games[], field: keyof Games): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isUnique = !gameList.some(game => game[field] === control.value);
      return isUnique ? null : { unique: true };
    };
  }
}
