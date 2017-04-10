import { Component, OnInit } from '@angular/core';
import {LocationService} from "../location.service";
import {Place} from "../models/place";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
