import {Component, Input, OnInit, SimpleChanges, Inject} from '@angular/core';
import {AngularFire, FirebaseRef} from 'angularfire2';
import {Place} from "../models/place";
import {LocationService} from "../location.service";
import 'GeoFire'
import {Observable} from "rxjs";

var context;

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})

export class JobsComponent implements OnInit {
  jobs: Observable<any[]>;
  locationService: LocationService;
  firebaseRef:any;

  @Input() place: Place;
  @Input() distance: number;
  @Input() salary:number

  constructor(af: AngularFire, locationService: LocationService) {
    this.jobs = af.database.list('/jobs');
    this.locationService = locationService;
    this.firebaseRef = af.database;
    context = this;
   /* var GeoFire = window["GeoFire"]
    var fireBaseRef = af.database.object('https://sdc-jobs.firebaseio.com/job-locations');
    var x = new GeoFire(fireBaseRef)
    x.set({
      "0": [37.79, -122.41],
      "1": [36.98, -122.56]
    });*/
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    let place = this.place;
    this.jobs = this.firebaseRef.list('/jobs', {
      query: {
        orderByChild: 'salary',
        startAt: this.salary
      }
    }).map(jobs => {
      jobs.forEach(job => {
        let distance = this.locationService.getDistance(job.location.lat, job.location.lon, place.lat, place.lon, 'M');
        if(isNaN(distance)===true){
          distance = 0;
        }
        job.distance = distance;
        return job;
      });
      return jobs.filter(job => {
        return job.distance < this.distance ;
      });
    });
  }
}
