import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { HomePage } from '../pages/home/home';
import {LocationListPage} from "../pages/location-list/location-list"

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    appMenuItems: Array<MenuItem>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        this.appMenuItems = [
            {title: 'Home', component: HomePage, icon: 'home'},
            {title: 'Locations', component: LocationListPage, icon: 'pin'},
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleLightContent();
            //this.splashScreen.hide();
        });
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }
}
