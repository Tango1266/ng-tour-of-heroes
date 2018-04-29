import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {Observable} from 'rxjs/Observable';
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, tap} from "rxjs/operators";
import {of} from "rxjs/observable/of";

@Injectable()
export class HeroService {

    private heroesURL = 'api/heroes'; // URL to web api

    constructor(private http: HttpClient,
                private messageService: MessageService) {
    }

    getHeroes(): Observable<Hero[]> {

        return this.http.get<Hero[]>(this.heroesURL)
            .pipe(
                tap(_heroes => this.log('fetched heroes')),
                catchError(this.handleError('getHeroes', []))
            );
    }

    getHero(id: number): Observable<Hero> {

        const url = `${this.heroesURL}/${id}`;
        return this.http.get<Hero>(url).pipe(
            tap(_ => this.log(`fetched hero id=${id}`)),
            catchError(this.handleError<Hero>(`gethero id = ${id}`))
        );
    }

    private log(message: string) {
        this.messageService.add(message);
    }


    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error);

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
