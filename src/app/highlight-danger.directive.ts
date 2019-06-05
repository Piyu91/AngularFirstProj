import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightDanger]'
})
export class HighlightDangerDirective {

  constructor(ef:ElementRef) { 
    ef.nativeElement.style.backgroundColor = 'red';
  }

}
