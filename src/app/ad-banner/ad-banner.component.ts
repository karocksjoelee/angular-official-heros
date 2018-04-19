import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver} from '@angular/core';
import { AdDirective } from '../ad.directive';
import { AdComponent } from './ad.component.interface';
import { AdService } from './ad.service';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit {

  @Input() ads;
  @ViewChild(AdDirective) adHost: AdDirective;
  currentAdIndex = -1;
  interval: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private adService: AdService
  ) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
    this.loadComponent();
    this.getAds();
  }

  /* Dynamic Component Loading:
    You need a way to load a new component without a fixed reference to the component
  **/

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
