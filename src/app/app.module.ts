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

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cookbook', component: CompCommunicationCookbookComponent },
  { path: 'version', component: VersionParentComponent },
  { path: 'childevent', component: VoteTakerComponent }
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
    VoteTakerComponent
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
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
