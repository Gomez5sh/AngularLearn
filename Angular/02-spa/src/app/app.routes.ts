import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../../02-spa/src/app/components/home/home.component';
import { AboutComponent } from '../../../02-spa/src/app/components/about/about.component';
import { HousesComponent } from '../../../02-spa/src/app/components/houses/houses.component';
import { HousesCardComponent } from '../../src/app/components/houses-card/houses-card.component';
import { SearchComponent } from '../app/components/search/search.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'houses', component: HousesComponent },
    { path: 'house/:id', component: HousesCardComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
