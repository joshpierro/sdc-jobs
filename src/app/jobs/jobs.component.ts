import {Component, Input, OnInit, SimpleChanges, Inject} from '@angular/core';
import {AngularFire, FirebaseRef} from 'angularfire2';
import {Place} from "../models/place";
import {LocationService} from "../location.service";
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {Observable} from "rxjs";
import {Job} from "../models/job";

var context;

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})

export class JobsComponent implements OnInit {
  jobs: Observable<any[]>;
  jobsList:any[];
  locationService: LocationService;
  firebaseRef:any;

  @Input() place: Place;
  @Input() distance: number;
  @Input() salary:number

  constructor(af: AngularFire, locationService: LocationService) {

    this.jobs = af.database.list('/jobs');

    this.jobs.forEach(jobs=>{
      this.jobsList = jobs;
    });

    this.locationService = locationService;
    this.firebaseRef = af.database;
    context = this;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    let place = this.place;

    this.firebaseRef.list('/jobs', {
      query: {
        orderByChild: 'salary',
        startAt: this.salary
      }
    }).forEach(jobs=>{
      //filter by location
      jobs.forEach(job=>{
          let distance = this.locationService.getDistance(job.location.lat, job.location.lon, place.lat, place.lon, 'M');
              if(isNaN(distance)===true){
                distance = 0;
              }
              job.distance = distance;
              return job;
        });
      this.jobsList = jobs.filter(job=>{
        return job.distance < this.distance ;
      });
      return jobs;
    });

  }
}
