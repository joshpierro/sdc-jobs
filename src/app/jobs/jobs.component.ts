import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.jobs = af.database.list('/jobs');
  }

  ngOnInit() {
  }

}
