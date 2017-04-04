import {Injectable} from '@angular/core';
import {Jsonp, URLSearchParams, Http, Response} from "@angular/http";

@Injectable()
export class LocationService {

  url = 'http://nominatim.openstreetmap.org/search?q=cooperstown&format=json&polygon=0&addressdetails=1';

  constructor(private jsonp: Jsonp, private http: Http) {
  }

  getDistance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1 / 180
    var radlat2 = Math.PI * lat2 / 180
    var radlon1 = Math.PI * lon1 / 180
    var radlon2 = Math.PI * lon2 / 180
    var theta = lon1 - lon2
    var radtheta = Math.PI * theta / 180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180 / Math.PI
    dist = dist * 60 * 1.1515
    if (unit == "K") {
      dist = dist * 1.609344
    }
    if (unit == "N") {
      dist = dist * 0.8684
    }
    return dist
  }

  getLocation() {
    return this.http.get(this.url)
      .map((res: Response) => {
        let response = res.json();
        return response.map((item) => {
          let city = item.address.city ? item.address.city : '';
          city = item.address.village ? item.address.village : city;
          city = item.address.hamlet ? item.address.hamlet : city;
          let state = item.address.state ? item.address.state : '';
          state = item.address.state_district ? item.address.state_district : state;
          return {
            lat: item.lat,
            lon: item.lon,
            address: item.address,
            label: city + ', ' + state
          }
        })
      });
  }


}
