import {FormControl, ValidationErrors} from '@angular/forms';

export function forbiddenChar(letters: string[]) {
  return function validator(input: FormControl): ValidationErrors | null {
    for (const letter of letters) {
      if (input.value.includes(letter)) {
        return {forbiddenChar: letter};
      }
    }
  };
}
