import { Component } from '@angular/core';
import {Place} from "./models/place";
import {LocationService} from "./location.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string;
  isOpen:boolean;
  place:Place;
  salary: number;
  distance:number;
  locationService:LocationService;


  constructor(locationService: LocationService){
    this.locationService = locationService;
  }

  ngOnInit() {
    this.title = 'sdc-jobs';
    this.isOpen = false;
    this.place = new Place();
    this.salary = 0;
    this.distance = 1000;
  }

  setDistanceFilter(){
   // console.log(this)
  }

  filterByDistance(){
    //console.log(this.place)
    //let distance = this.locationService.getDistance(42.7006303,-74.9243209,47.4444384,-98.1239842,'M');
  }

  filterBySalary(){
  // console.log(this.salary);
  }

  toggleButton(){
    this.isOpen = false;
  }
  toggleFilter(){
    this.isOpen = !this.isOpen;
  }

}
