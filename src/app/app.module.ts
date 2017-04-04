import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {AngularFireModule, FirebaseRef} from 'angularfire2';
import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { FiltersComponent } from './filters/filters.component';
import { FeaturedComponent } from './featured/featured.component';
import {LocationService} from './location.service';
import 'hammerjs';


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
    JsonpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [LocationService],
  bootstrap: [AppComponent,[]]
})

export class AppModule {
}
