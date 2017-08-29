import { Component, OnInit } from '@angular/core';
import {JobsService} from "../jobs.service";
import {ActivatedRoute} from "@angular/router";
import {Company} from "../models/company";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  routeParams:ActivatedRoute;
  companyId:string;
  title:string
  jobService:JobsService;
  company:Company;

  constructor(private route: ActivatedRoute, jobService:JobsService) {
    this.routeParams = route;
    this.jobService = jobService;
    this.title= 'sdc-jobs';
  }

  ngOnInit() {
    this.routeParams.params.subscribe(params => {
      this.companyId = params['companyId'];
      this.company = this.jobService.getCompany(params['companyId']);
    });
  }
}
