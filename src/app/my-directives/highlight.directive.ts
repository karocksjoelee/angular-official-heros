import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('color') color: string;

  constructor(private element: ElementRef) {
    // ElementRef grants direct access to the host DOM element through its nativeElement property.
    // element.nativeElement.style.backgroundColor = 'yellow';
  }

  // The @HostListener decorator lets you subscribe to events of the DOM element that hosts an attribute directive, the <p> in this case.
  @HostListener('mouseenter') onMouseenter() {
    this.highlight(this.color || 'yellow');
  }

  @HostListener('mouseleave') onMouseleave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
