import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroesComponent} from './heroes/heroes.component'
import {RouterModule, Routes} from "@angular/router";

@NgModule({
    imports: [
        CommonModule
    ],

})

@NgModule({
    exports: [RouterModule]
})
export class AppRoutingModule {

}

const routes: Routes = [
    {path: 'heroes', component: HeroesComponent}
];
