import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../../02-spa/src/app/components/home/home.component';
import { AboutComponent } from '../../../02-spa/src/app/components/about/about.component';
import { HousesComponent } from '../../../02-spa/src/app/components/houses/houses.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'houses', component: HousesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
