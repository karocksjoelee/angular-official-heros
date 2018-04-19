import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAd]'
})
export class AdDirective {


  // AdDirective injects ViewContainerRef to gain access to the view container of the element
  // that will host the dynamically added component.
  // Before you can add components you have to define an anchor point to tell Angular where to insert components.
  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
