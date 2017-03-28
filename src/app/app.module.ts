import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import { JobsComponent } from './jobs/jobs.component';
import 'hammerjs';
import { FiltersComponent } from './filters/filters.component';
import { FeaturedComponent } from './featured/featured.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyAv1UFyC-vGIpkZiFBjc6ntK1Mo_1CkJBg",
  authDomain: "sdc-jobs.firebaseapp.com",
  databaseURL: "https://sdc-jobs.firebaseio.com",
  storageBucket: "sdc-jobs.appspot.com",
  messagingSenderId: "882631504154"
};


@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    FiltersComponent,
    FeaturedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
