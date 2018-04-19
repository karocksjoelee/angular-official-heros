import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, CanActivate, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { CompCommunicationCookbookComponent } from './comp-communication-cookbook/comp-communication-cookbook.component';
import { HeroParentComponent } from './comp-communication-cookbook/hero-parent/hero-parent.component';
import { HeroChildComponent } from './comp-communication-cookbook/hero-child/hero-child.component';
import { VersionParentComponent } from './comp-communication-cookbook/version-parent/version-parent.component';
import { VersionChildComponent } from './comp-communication-cookbook/version-child/version-child.component';
import { VoterComponent } from './comp-communication-cookbook/voter/voter.component';
import { VoteTakerComponent } from './comp-communication-cookbook/vote-taker/vote-taker.component';
import { CountdownParentComponent } from './comp-communication-cookbook/countdown-parent/countdown-parent.component';
import { CountdownTimerComponent } from './comp-communication-cookbook/countdown-timer/countdown-timer.component';
import {
  CountdownParentViewChildComponent
} from './comp-communication-cookbook/countdown-parent-view-child/countdown-parent-view-child.component';
import { AstronautComponent } from './comp-communication-cookbook/astronaut/astronaut.component';
import { MissonControlComponent } from './comp-communication-cookbook/misson-control/misson-control.component';
import { MissionService } from './mission.service';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './ad-banner/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './ad-banner/hero-profile/hero-profile.component';
import { AdService } from './ad-banner/ad.service';
import { MyDirectivesComponent } from './my-directives/my-directives.component';
import { HighlightDirective } from './my-directives/highlight.directive';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cookbook', component: CompCommunicationCookbookComponent },
  { path: 'version', component: VersionParentComponent },
  { path: 'childevent', component: VoteTakerComponent },
  { path: 'countdown', component: CountdownParentComponent },
  { path: 'viewchild', component: CountdownParentViewChildComponent },
  { path: 'service', component: MissonControlComponent },
  { path: 'ad', component: AdBannerComponent },
  { path: 'directives', component: MyDirectivesComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent,
    HeroSearchComponent,
    CompCommunicationCookbookComponent,
    HeroParentComponent,
    HeroChildComponent,
    VersionParentComponent,
    VersionChildComponent,
    VoterComponent,
    VoteTakerComponent,
    CountdownParentComponent,
    CountdownTimerComponent,
    CountdownParentViewChildComponent,
    AstronautComponent,
    MissonControlComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    MyDirectivesComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule.forRoot(routes)
  ],
  // The providers array tells Angular to create a single, shared instance of HeroService and inject into any class that asks for it.
  providers: [
    HeroService,
    MessageService,
    MissionService,
    AdService
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    HeroJobAdComponent,
    HeroProfileComponent
  ]
})
export class AppModule { }
