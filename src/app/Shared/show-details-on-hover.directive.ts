import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowDetailsOnHover]',
  standalone: true,
})
export class ShowDetailsOnHoverDirective {
  @Input('appShowDetailsOnHover') hoverText: string = ''; // Input for hover text
  private tooltip: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltip && this.hoverText) {
      this.tooltip = this.renderer.createElement('span');
      this.renderer.setStyle(this.tooltip, 'position', 'absolute');
      this.renderer.setStyle(this.tooltip, 'background', '#333');
      this.renderer.setStyle(this.tooltip, 'color', '#fff');
      this.renderer.setStyle(this.tooltip, 'padding', '5px 10px');
      this.renderer.setStyle(this.tooltip, 'borderRadius', '5px');
      this.renderer.setStyle(this.tooltip, 'fontSize', '12px');
      this.renderer.setStyle(this.tooltip, 'top', `${this.el.nativeElement.offsetTop - 30}px`);
      this.renderer.setStyle(this.tooltip, 'left', `${this.el.nativeElement.offsetLeft}px`);
      this.renderer.setStyle(this.tooltip, 'zIndex', '1000');
      this.renderer.setStyle(this.tooltip, 'whiteSpace', 'nowrap');

      const text = this.renderer.createText(this.hoverText);
      this.renderer.appendChild(this.tooltip, text);
      this.renderer.appendChild(document.body, this.tooltip);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) {
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    }
  }
}
