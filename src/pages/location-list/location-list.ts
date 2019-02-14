import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {EstateService} from '../../providers/estate-service-mock';
import {EstateListPage} from '../estate-list/estate-list';

@Component({
    selector: 'page-location-list',
    templateUrl: 'location-list.html'
})
export class LocationListPage {

    locations: Array<any>;
    viewMode: string = "list";

    constructor(public navCtrl: NavController, public service: EstateService, public estateService: EstateService, 
        public toastCtrl: ToastController) {
        
        this.service.getAllLocations()
            .then(data => this.locations = data)
            .catch(error => alert(error));
    }

    listEstates(locationId: any) {
        console.log(locationId);
        this.navCtrl.push(EstateListPage, locationId);
    }
}
