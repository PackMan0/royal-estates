import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {EstateService} from '../../providers/estate-service-mock';
import {EstateDetailPage} from '../estate-detail/estate-detail';

@Component({
    selector: 'page-estate-list',
    templateUrl: 'estate-list.html'
})
export class EstateListPage {

    estates: Array<any>;

    constructor(public navCtrl: NavController, 
        public navParams: NavParams, 
        public estateService: EstateService, 
        public toastCtrl: ToastController) {

        let locationId = this.navParams.data;

        if(locationId.length > 0){
            estateService.findEstatesByLocation(locationId).then(
                estates => this.estates = estates
            );
        }
        else{
            estateService.getAllEstates().then(
                estates => this.estates = estates
            );
        }
    }

    openEstateDetail(estateId) {
        this.navCtrl.push(EstateDetailPage, estateId);
    }

}