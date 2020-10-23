// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes';


// Services
import { HousesService } from './components/services/houses.services';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HousesComponent } from './components/houses/houses.component';
import { HousesCardComponent } from './components/houses-card/houses-card.component';
import { SearchComponent } from './components/search/search.component';
import { HouseCardComponent } from './components/house-card/house-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HousesComponent,
    HousesCardComponent,
    SearchComponent,
    HouseCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
  ],
  providers: [
    HousesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
