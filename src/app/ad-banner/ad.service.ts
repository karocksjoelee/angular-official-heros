import { Injectable } from '@angular/core';
import { AdItem } from './ad-item';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';

@Injectable()
export class AdService {

  constructor() { }

  getAds() {
    return [
      new AdItem(
        HeroProfileComponent, { name: 'Bombasto', bio: 'Brave as the come' }
      ),
      new AdItem(
        HeroProfileComponent, { name: 'Dr.IQ', bio: 'Smart as they come' }
      ),
      new AdItem(
        HeroJobAdComponent, { headline: 'Hiring Serval Position', body: 'Submit your resume today'},
      ),
      new AdItem(
        HeroJobAdComponent, { headline: 'Openings in all department', body: 'Apply Today '}
      )
    ];
  }

}
