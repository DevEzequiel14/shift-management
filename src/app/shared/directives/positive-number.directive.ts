import { Directive, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appPositiveNumber]',
  providers: [NgModel]
})
export class PositiveNumberDirective {

  constructor(private ngModel: NgModel) { }

  @HostListener('ngModelChange', ['$event'])
  onInput(value: any) {
    const numericValue = Number(value);
    if (numericValue < 1 || isNaN(numericValue) || !Number.isInteger(numericValue)) {
      this.ngModel.control.setValue(1);
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const invalidKeys = ['-', 'Subtract', '.', ',', 'e'];
    if (invalidKeys.includes(event.key)) {
      event.preventDefault();
    }
    if (event.key === 'ArrowDown') {
      const input = event.target as HTMLInputElement;
      const value = Number(input.value);
      if (value <= 1) {
        event.preventDefault();
      }
    }
  }
}
