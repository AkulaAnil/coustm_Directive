import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[numberOnly]'
})
export class NumberOnlyDirective {

  // private regex: RegExp = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);

  // private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home', '-' ];

  // constructor(private el: ElementRef) {
  // }
  // @HostListener('keydown', [ '$event' ])
  // onKeyDown(event: KeyboardEvent) {
  //   if (this.specialKeys.indexOf(event.key) !== -1) {
  //     return;
  //   }
  //   let current: string = this.el.nativeElement.value;
  //   let next: string = current.concat(event.key);
  //   if (next && !String(next).match(this.regex)) {
  //     event.preventDefault();
  //   }
  // }
  
  constructor(private _el: ElementRef) { }
  

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;

    this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if ( initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }
 
}
