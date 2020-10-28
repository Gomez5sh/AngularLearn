import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SecuredomPipe } from './pipes/securedom.pipe';
import { PasswordPipe } from './pipes/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    SecuredomPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
