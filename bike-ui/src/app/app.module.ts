import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminComponent} from './components/admin/admin.component';
import {BikeService} from './services/bike.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
