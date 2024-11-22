import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  @Input('appHighlightOnFocus') highlightColor: string = 'yellow'; // Default highlight color

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('focus') onFocus(): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      this.highlightColor
    );
  }

  @HostListener('blur') onBlur(): void {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}
