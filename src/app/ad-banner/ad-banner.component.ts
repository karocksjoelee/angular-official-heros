import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver} from '@angular/core';
import { AdDirective } from '../ad.directive';
import { AdComponent } from './ad.component.interface';
import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit {

  ads: AdItem[];
  @ViewChild(AdDirective) adHost: AdDirective;
  currentAdIndex = -1;
  interval: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private adService: AdService
  ) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
    this.installComponent();
    // this.loadComponent();
    // this.getAds();
  }

  /* Dynamic Component Loading:
    You need a way to load a new component without a fixed reference to the component
  **/

  installComponent() {
    // Resolve Component
    let componentResolver = this.resolver.resolveComponentFactory(this.ads[0].component);
    // Get Where to put it ( AdHost Directive)
    let viewHolder = this.adHost.viewContainerRef;
    viewHolder.clear();
    // Create Component
    let componentRef = viewHolder.createComponent(componentResolver);
    // Give it data
    componentRef.instance.data = this.ads[0].data;
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1 ) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];
    let componentFactory = this.resolver.resolveComponentFactory(adItem.component);
    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 2000);
  }

}
