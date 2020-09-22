import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]',
})
export class UppercaseDirective {
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.transform('uppercase');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.transform(null);
  }

  constructor(private el: ElementRef<HTMLElement>) {}

  private transform(textTransform: string): void {
    this.el.nativeElement.style.textTransform = textTransform;
  }
}
