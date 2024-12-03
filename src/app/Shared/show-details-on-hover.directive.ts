import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowDetailsOnHover]',
  standalone: true, // Mark as standalone
})
export class ShowDetailsOnHoverDirective {
  @Input('appShowDetailsOnHover') tooltipText: string = '';

  private tooltipElement?: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.createTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.destroyTooltip();
  }

  private createTooltip() {
    if (!this.tooltipText) return;

    this.tooltipElement = this.renderer.createElement('span');
    const text = this.renderer.createText(this.tooltipText);

    this.renderer.appendChild(this.tooltipElement, text);
    this.renderer.appendChild(document.body, this.tooltipElement);

    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'background', 'rgba(0, 0, 0, 0.75)');
    this.renderer.setStyle(this.tooltipElement, 'color', '#fff');
    this.renderer.setStyle(this.tooltipElement, 'padding', '5px 10px');
    this.renderer.setStyle(this.tooltipElement, 'border-radius', '5px');
    this.renderer.setStyle(this.tooltipElement, 'top', `${this.el.nativeElement.getBoundingClientRect().top - 30}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${this.el.nativeElement.getBoundingClientRect().left}px`);
    this.renderer.setStyle(this.tooltipElement, 'pointer-events', 'none');
    this.renderer.setStyle(this.tooltipElement, 'z-index', '1000');
  }

  private destroyTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = undefined;
    }
  }
}
