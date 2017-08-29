import {BrowserModule } from '@angular/platform-browser';
import {NgModule, enableProdMode} from '@angular/core';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpModule,JsonpModule } from '@angular/http';
import {MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {AngularFireModule, FirebaseRef} from 'angularfire2';
import {AppComponent } from './app.component';
import {JobsComponent } from './jobs/jobs.component';
import {FiltersComponent } from './filters/filters.component';
import {FeaturedComponent } from './featured/featured.component';
import {LocationService} from './location.service';
import {JobsService} from './jobs.service';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule,DataTableModule,DataListModule,ButtonModule,DialogModule,SharedModule} from 'primeng/primeng';
import 'hammerjs';
import { JobComponent } from './job/job.component';
import { HomeComponent } from './home/home.component';
import {CompaniesComponent} from "./companies/companies.component";
import {CompanyComponent} from "./company/company.component";

enableProdMode();

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyAv1UFyC-vGIpkZiFBjc6ntK1Mo_1CkJBg",
  authDomain: "sdc-jobs.firebaseapp.com",
  databaseURL: "https://sdc-jobs.firebaseio.com",
  storageBucket: "sdc-jobs.appspot.com",
  messagingSenderId: "882631504154"
};


const appRoutes: Routes = [
  { path: 'job/:jobId',
    component: JobComponent,
    data: { title: 'Job Detail' }
  },
  {
    path: 'jobs',
    component: JobsComponent,
    data: { title: 'Jobs' }
  },
  {
    path: 'companies',
    component: CompaniesComponent,
    data: { title: 'companies' }
  },
  { path: 'company/:companyId',
    component: CompanyComponent,
    data: { title: 'Company Detail' }
  },
  { path: '',
    component: HomeComponent
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    FiltersComponent,
    FeaturedComponent,
    JobComponent,
    CompaniesComponent,
    CompanyComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule,
    ReactiveFormsModule,
    BrowserModule,
    InputTextModule,
    DataTableModule,
    DataListModule,
    ButtonModule,
    DialogModule,
    SharedModule
  ],
  providers: [LocationService,JobsService],
  bootstrap: [AppComponent,[]]
})

export class AppModule {
}
