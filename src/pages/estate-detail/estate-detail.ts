import {Component} from '@angular/core';
import {ActionSheetController, NavController, NavParams} from 'ionic-angular';
import {EstateService} from '../../providers/estate-service-mock';

@Component({
    selector: 'page-estate-detail',
    templateUrl: 'estate-detail.html'
})
export class EstateDetailPage {

    estate: any;
    viewMode: string;
    lat: number = 42.698334;
    lng: number = 23.319941;

    constructor(public actionSheetCtrl: ActionSheetController, 
        public navCtrl: NavController, 
        public navParams: NavParams, 
        public estateService: EstateService) {

        let estateId = this.navParams.data;
        this.viewMode = "card"
        if(estateId != undefined && estateId.toString().length > 0){
            estateService.getEstateById(estateId).then(
                estate => this.estate = estate
            );
        }
    }


    showMap(estate) {
        console.log(estate);
        this.estate = estate
        this.viewMode = "map";
        this.lat = estate.latitude;
        this.lng = estate.longitude;
    }

    showDetails(estate) {
        this.estate = estate
        this.viewMode = "card";
    }

}
