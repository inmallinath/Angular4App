import { Injectable } from '@angular/core';
import { BusinessAddress } from './entity/BusinessAddress';

@Injectable()
export class GeomappingService {

  constructor() { }

  getLocation(business){
    navigator.geolocation.getCurrentPosition(
      position => {
        business(position.coords);
      },
      error => {
        business(null);
      }
    );
  }

  // tslint:disable-next-line:one-line
  createLink(address: BusinessAddress){
    let query = '';
    if (address.latitude) {
      query = `${address.latitude},${address.longitude}`;
    } else {
      query = `${address.street},${address.city}`;
    }

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      return `https://maps.apple.com/q=${query}`;
    // tslint:disable-next-line:one-line
    }else{
      return `https://maps.google.com/q=${query}`;
    }
  }
}
