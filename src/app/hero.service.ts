import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of'
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class HeroService {

    private heroesURL = 'api/heroes'; // URL to web api

    constructor(private http: HttpClient,
                private messageService: MessageService) {
    }

    getHeroes(): Observable<Hero[]> {

        this.log('HeroService: fetching heroes...');

        return this.http.get<Hero[]>(this.heroesURL);
    }

    getHero(id: number): Observable<Hero> {
        this.messageService.add(`HeroService: fetching hero id =${id}`);
        return this.http.get<Hero>(this.heroesURL);
    }

    private log(message: string) {
        this.messageService.add(message);
    }
}
