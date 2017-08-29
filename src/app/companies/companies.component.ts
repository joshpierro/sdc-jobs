import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFire} from "angularfire2";
import {Company} from "../models/company";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Observable<any[]>;
  companiesList:Company[];


  constructor(af: AngularFire) {
    this.companies = af.database.list('/companies');
    this.companies.forEach(companies=>{
      companies.forEach(function(company){
        //hackey??
        company.companyId = company.$key;
      })
      this.companiesList = companies;
    });

  }

  ngOnInit() {
  }

}
