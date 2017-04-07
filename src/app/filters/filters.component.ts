import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {LocationService} from '../location.service';
import {Place} from '../models/place';
import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {FormControl} from '@angular/forms';
import {Distance} from "../models/distance";
import {InputTextModule} from 'primeng/primeng';

var context = this;

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})


export class FiltersComponent implements OnInit {

  locationService: LocationService;
  placeControl = new FormControl();
  places:Place[];
  filteredPlaces: Observable<Place[]>;
  distances:Distance[];
  document:any;

  distance:number;
  @Input() selectedDistance:number;
  @Output() selectedDistanceChange = new EventEmitter<number>();

  locationText:string;
  @Input() selectedPlace: Place;
  @Output() selectedPlaceChange = new EventEmitter<Place>();

  salary: number;
  @Input() selectedSalary: number;
  @Output() selectedSalaryChange = new EventEmitter<number>();


  constructor(locationService: LocationService) {
    this.locationService = locationService;
    this.distances = [
      {distance:10, text:"Within 10 Miles of:"},
      {distance:25, text:"Within 25 Miles of:"},
      {distance:50, text:"Within 50 Miles of:"},
      {distance:100, text:"Within 100 Miles of:"},
      {distance:500, text:"Within 500 Miles of:"},
      {distance:1000, text:"Within 1000 Miles of:"},
      {distance:5000, text:"Within 5000 Miles of:"}
    ]
    this.distance = this.distances[4].distance;
    this.places = [];
    this.locationText = '';


    context = this;
  }

  ngOnInit() {
   // this.placeFilter = 'none';
    this.filteredPlaces = this.placeControl.valueChanges
      .startWith(null)
      .map(place => place && typeof place === 'object' ? place.label : place)
      .map(label => label ? this.filter(label) : this.places.slice());
  }


  searchLocation(input:any) {
    if(this.locationText.length>2){
      let g = window["google"];
      let a = new g.maps.places.Autocomplete(
        input,
        {types: ['geocode']}
      );
      let place;
      a.addListener('place_changed', function(){
        place =  a.getPlace();
        let result =  {
               lat: place.geometry.location.lat(),
               lon: place.geometry.location.lng(),
               address: place.address_components,
               label: place.formatted_address
             }
        context.selectedPlace = result;
        context.selectedPlaceChange.emit(result);
      });
    }
  }

  setDistance(){
    context.selectedDistance = this.distance;
    context.selectedDistanceChange.emit(context.selectedDistance);
  }

  setSalary(){
    context.selectedSalary = this.salary;
    context.selectedSalaryChange.emit(context.selectedSalary);
  }

  setLocation(place: Place): string {
    //console.log(context)
    if(place){
      context.selectedPlace = place;
      context.selectedPlaceChange.emit(place);
    }
    return place ? place.label : '';
  }
  filter(label: string): Place[] {
    label = label.replace(/[^a-zA-Z ]/g, "");
    return []
  /*  return this.places.filter(place =>
      new RegExp(label, 'gi').test(place.label)
    );*/
  }

}
