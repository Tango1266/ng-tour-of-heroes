import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes'
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of'
import {MessageService} from "./message.service";
import {elementClass} from "@angular/core/src/render3/instructions";

@Injectable()
export class HeroService {

    constructor(private messageService: MessageService) {
    }

    getHeroes(): Observable<Hero[]> {

        this.messageService.add('HeroService: fetching heroes...');

        /*rxjs.observable.of() creates a Observable of HEROES*/
        return of(HEROES);
    }
}
