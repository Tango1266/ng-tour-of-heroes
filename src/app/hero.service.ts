import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes'
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of'
import {MessageService} from "./message.service";

@Injectable()
export class HeroService {

    constructor(private messageService: MessageService) {
    }

    getHeroes(): Observable<Hero[]> {

        this.messageService.add('HeroService: fetching heroes...');

        /*rxjs.observable.of() creates a Observable of HEROES*/
        return of(HEROES);
    }

    getHero(id: number): Observable<Hero> {
        this.messageService.add(`HeroService: fetching hero id =${id}`);
        return of(HEROES.find(_hero => _hero.id == id));
    }
}
