import {Component, OnInit, Input} from '@angular/core';
import {Hero} from "../hero";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {HeroService} from "../hero.service";

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;

    constructor(private route: ActivatedRoute,
                private heroService: HeroService,
                private location: Location) {
    }

    ngOnInit() {
        this.getHero();
    }

    getHero() {

        /*The JavaScript (+) operator converts the string to a number, which is what a hero id should be.*/
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id).subscribe((_hero) => this.hero = _hero);

    }

    goBack(): void {
        this.location.back();
    }
}
