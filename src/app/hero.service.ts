import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

// The @Injectable() decorator tells Angular that this service might itself have injected dependencies.
// [CLI] ng generate service hero --module=app
@Injectable()
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    return of(HEROES);
  }

}
