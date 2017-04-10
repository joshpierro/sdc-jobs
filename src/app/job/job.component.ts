import {JobsService} from "../jobs.service";
;import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  routeParams:ActivatedRoute;
  jobId:string;
  title:string
  jobService:JobsService;
  job;any;

  constructor(private route: ActivatedRoute, jobService:JobsService) {
    this.routeParams = route;
    this.jobService = jobService;
    this.title= 'sdc-jobs';
  }

  ngOnInit() {
    this.routeParams.params.subscribe(params => {
      this.jobId = params['jobId'];
    });

    this.getRoute();
  }

  getRoute():void{
    this.job = this.jobService.getJob(this.jobId)
    }

}
