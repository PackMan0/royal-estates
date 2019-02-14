import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {EstateListPage} from '../pages/estate-list/estate-list';
import {EstateDetailPage} from '../pages/estate-detail/estate-detail';
import {LocationListPage} from "../pages/location-list/location-list"

import {EstateService} from "../providers/estate-service-mock";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    MyApp,
    EstateListPage,
    EstateDetailPage,
    HomePage,
    LocationListPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAi91xerL_8t_7tnCR7GstQ2W0uxUT6ILk'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EstateListPage,
    EstateDetailPage,
    HomePage,
    LocationListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EstateService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
