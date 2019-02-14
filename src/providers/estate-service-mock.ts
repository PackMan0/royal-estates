import { Injectable } from '@angular/core';
import database  from './mock-database';

@Injectable()
export class EstateService {

  getAllLocations() {
    let locations: Array<any> = []; 

    database.forEach(location => {
      locations.push(location.location)
    });

    return Promise.resolve(locations);
  }

  getAllEstates(){

    let estates: Array<any> = [];

    database.forEach(location => {

      estates.push(location.estates);
    });

    
    return Promise.resolve(estates);

  }

  findEstatesByLocation(id) {
    

    let estates: Array<any> = []; 

    database.forEach(location => {
      
      if(location.location.id=== id)
      {
        estates = location.estates;
        return;
      }
    });

    
    return Promise.resolve(estates);
  }

  getEstateById(id){

    let result: any; 

    database.forEach(location => {

      location.estates.forEach(estate => {
        if(estate.id == id){
          result = estate;
          return;
        }
      });
    });
    return Promise.resolve(result);
  }

}
