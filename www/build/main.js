webpackJsonp([0],{

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 233;

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Dev_5\Downloads\dreamhouse-mobile-ionic-master\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>My Estates</h3>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Dev_5\Downloads\dreamhouse-mobile-ionic-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstateListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_estate_service_mock__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__estate_detail_estate_detail__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EstateListPage = /** @class */ (function () {
    function EstateListPage(navCtrl, navParams, estateService, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.estateService = estateService;
        this.toastCtrl = toastCtrl;
        var locationId = this.navParams.data;
        if (locationId.length > 0) {
            estateService.findEstatesByLocation(locationId).then(function (estates) { return _this.estates = estates; });
        }
        else {
            estateService.getAllEstates().then(function (estates) { return _this.estates = estates; });
        }
    }
    EstateListPage.prototype.openEstateDetail = function (estateId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__estate_detail_estate_detail__["a" /* EstateDetailPage */], estateId);
    };
    EstateListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estate-list',template:/*ion-inline-start:"C:\Users\Dev_5\Downloads\dreamhouse-mobile-ionic-master\src\pages\estate-list\estate-list.html"*/'<ion-header>\n\n    <ion-navbar>\n    <ion-title>Estates</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="estate-list">\n\n    <ion-list>\n\n        <ion-item-sliding *ngFor="let estate of estates">\n            <button ion-item (click)="openEstateDetail(estate.id)">\n                <ion-thumbnail item-left>\n                    <img src="{{estate.image}}"/>\n                </ion-thumbnail>\n                <h2>{{estate.type}}</h2>\n                <p>{{estate.region}} ∙ {{ estate.price }}</p>\n            </button>\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>\n\n<ion-footer padding>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Dev_5\Downloads\dreamhouse-mobile-ionic-master\src\pages\estate-list\estate-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_estate_service_mock__["a" /* EstateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], EstateListPage);
    return EstateListPage;
}());

//# sourceMappingURL=estate-list.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstateDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_estate_service_mock__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EstateDetailPage = /** @class */ (function () {
    function EstateDetailPage(actionSheetCtrl, navCtrl, navParams, estateService) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.estateService = estateService;
        this.lat = 42.698334;
        this.lng = 23.319941;
        var estateId = this.navParams.data;
        this.viewMode = "card";
        if (estateId != undefined && estateId.toString().length > 0) {
            estateService.getEstateById(estateId).then(function (estate) { return _this.estate = estate; });
        }
    }
    EstateDetailPage.prototype.showMap = function (estate) {
        console.log(estate);
        this.estate = estate;
        this.viewMode = "map";
        this.lat = estate.latitude;
        this.lng = estate.longitude;
    };
    EstateDetailPage.prototype.showDetails = function (estate) {
        this.estate = estate;
        this.viewMode = "card";
    };
    EstateDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estate-detail',template:/*ion-inline-start:"C:\Users\Dev_5\Downloads\dreamhouse-mobile-ionic-master\src\pages\estate-detail\estate-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Estate</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngIf="viewMode===\'card\'">\n        <img src="{{estate.image}}"/>\n        <ion-card-content>\n            <h2 class="card-title">{{estate.type}}</h2>\n            <p>{{estate.address}}</p>\n        </ion-card-content>\n        <ion-list>\n\n            <ion-item>\n                <ion-icon item-left name="moon"></ion-icon>\n                <h3>Bedrooms</h3>\n                <ion-note item-right>{{estate.bedrooms}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="pricetag"></ion-icon>\n                <h3>Asking Price</h3>\n                <ion-note item-right>{{estate.price}}</ion-note>\n            </ion-item>\n        </ion-list>\n    </ion-card>\n\n    <agm-map *ngIf="viewMode===\'map\'" [latitude]="lat" [longitude]="lng" [zoom]="15"\n  [disableDefaultUI]="false"\n  [zoomControl]="false">\n        <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>\n      </agm-map>\n</ion-content>\n\n<ion-footer padding>\n    <ion-segment [(ngModel)]="viewMode">\n        <ion-segment-button value="card" (ionSelect)="showDetails(estate)"> \n            <ion-icon name="information-circle-outline"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="map" (ionSelect)="showMap(estate)">\n            <ion-icon name="map"></ion-icon>\n        </ion-segment-button>\n    </ion-segment>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Dev_5\Downloads\dreamhouse-mobile-ionic-master\src\pages\estate-detail\estate-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_estate_service_mock__["a" /* EstateService */]])
    ], EstateDetailPage);
    return EstateDetailPage;
}());

//# sourceMappingURL=estate-detail.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(405);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_estate_list_estate_list__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_estate_detail_estate_detail__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_location_list_location_list__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_estate_service_mock__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen_ngx__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__agm_core__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_estate_list_estate_list__["a" /* EstateListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_estate_detail_estate_detail__["a" /* EstateDetailPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_location_list_location_list__["a" /* LocationListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_12__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAi91xerL_8t_7tnCR7GstQ2W0uxUT6ILk'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_estate_list_estate_list__["a" /* EstateListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_estate_detail_estate_detail__["a" /* EstateDetailPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_location_list_location_list__["a" /* LocationListPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen_ngx__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__providers_estate_service_mock__["a" /* EstateService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen_ngx__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_location_list_location_list__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Locations', component: __WEBPACK_IMPORTED_MODULE_5__pages_location_list_location_list__["a" /* LocationListPage */], icon: 'pin' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleLightContent();
            //this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    var _a, _b, _c, _d;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]) === "function" ? _a : Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Dev_5\Downloads\dreamhouse-mobile-ionic-master\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-content>\n\n    <img src="assets/img/dreamhouse-logo.svg" class="menu-logo"/>\n\n    <ion-list>\n      <ion-list-header>\n        Shop\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n        {{menuItem.title}}\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>\n        Help\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let menuItem of helpMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n        {{menuItem.title}}\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>\n        Account\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let menuItem of accountMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n        {{menuItem.title}}\n      </button>\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Dev_5\Downloads\dreamhouse-mobile-ionic-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen_ngx__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen_ngx__["a" /* SplashScreen */]) === "function" ? _d : Object])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var database = [
    {
        "location": {
            "name": "Sofia",
            "id": "3dd50aaf-6b03-4497-b074-d81703f07ee8"
        },
        "estates": [
            {
                "id": 1,
                "refNumber": "00001",
                "region": "Lozenets",
                "type": "Apartment",
                "bedrooms": 2,
                "area": 100.50,
                "price": 100000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00001.jpg?alt=media&token=e38caf86-3aa2-4306-b119-046bf0aaf63e",
                "address": "bul. 'Arsenalski' 25, 1421 g.k. Lozenets, Sofia",
                "latitude": 42.6780919,
                "longitude": 23.3188219
            },
            {
                "id": 2,
                "refNumber": "00002",
                "region": "Lozenets",
                "type": "House",
                "bedrooms": 3,
                "area": 243,
                "price": 320000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00002.jpg?alt=media&token=9b17648c-3aed-4b53-9db7-603c21e1387b",
                "address": "blvd. 'James Bourchier' 16, 1164 g.k. Lozenets, Sofia",
                "latitude": 42.6755391,
                "longitude": 23.3287231
            },
            {
                "id": 3,
                "refNumber": "00003",
                "region": "Izgrev",
                "type": "Apartment",
                "bedrooms": 3,
                "area": 98.45,
                "price": 98000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00003.jpg?alt=media&token=00194dee-df02-4a74-b54b-6ff0a56c7903",
                "address": "ulitsa 'Latinka' 40-46, 1113 g.k. Izgrev, Sofia",
                "latitude": 42.6707126,
                "longitude": 23.3449795
            },
            {
                "id": 5,
                "refNumber": "00005",
                "region": "Izgrev",
                "type": "House",
                "bedrooms": 4,
                "area": 320.00,
                "price": 900000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00005.jpg?alt=media&token=3bc0d4fe-a76b-449d-a02f-64fcfb5191df",
                "address": "ul.'Elemag' 8-20, 1113 g.k. Izgrev, Sofia",
                "latitude": 42.6689851,
                "longitude": 23.3469594
            },
            {
                "id": 7,
                "refNumber": "00007",
                "region": "Izgrev",
                "type": "Apartment",
                "bedrooms": 3,
                "area": 103.25,
                "price": 120000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00007.jpg?alt=media&token=a22dbfd0-2d55-4c75-b5d0-81e2f738e383",
                "address": "ul. 'Rusalya', 1113 g.k. Izgrev, Sofia",
                "latitude": 42.6691515,
                "longitude": 23.3449544
            },
            {
                "id": 8,
                "refNumber": "00008",
                "region": "Izgrev",
                "type": "Studio",
                "bedrooms": 1,
                "area": 35.00,
                "price": 48500,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00008.jpg?alt=media&token=11b5e310-4bda-43bf-a4ad-a4719e8c98bc",
                "address": "ul. 'General Shteryu Atanasov' 6-8, 1113 g.k. Izgrev, Sofia",
                "latitude": 42.6711482,
                "longitude": 23.3449038
            },
            {
                "id": 4,
                "refNumber": "00004",
                "region": "Iztok",
                "type": "Studio",
                "bedrooms": 1,
                "area": 45.25,
                "price": 55000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00004.jpg?alt=media&token=0772e6cd-904c-412d-adfe-48f65579b6fc",
                "address": "ul. 'Frederic Joliot-Curie' 18, 1113 g.k. Iztok, Sofia",
                "latitude": 42.6720182,
                "longitude": 23.3496821
            },
            {
                "id": 6,
                "refNumber": "00006",
                "region": "Mladost 2",
                "type": "Apartment",
                "bedrooms": 2,
                "area": 76.50,
                "price": 85000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00006.jpg?alt=media&token=5c007092-4777-4751-bf3d-ba2142a14df7",
                "address": "Block 241, 1799 g.k. Mladost 2, Sofia",
                "latitude": 42.6449896,
                "longitude": 23.3671026
            }
        ]
    },
    {
        "location": {
            "name": "Plovdiv",
            "id": "98c6857e-b0d1-4295-b89e-2d95a45437f2"
        },
        "estates": [
            {
                "id": 9,
                "refNumber": "00009",
                "region": "Trakiya",
                "type": "Apartment",
                "bedrooms": 2,
                "area": 99.50,
                "price": 78000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00009.jpg?alt=media&token=f0a18939-ed02-4a23-9f68-ef13ea795c98",
                "address": "ul. 'Maestro G. Atanasov' 82, 4023 'Panajot Volov', Plovdiv",
                "latitude": 42.1301222,
                "longitude": 24.78004
            },
            {
                "id": 10,
                "refNumber": "00010",
                "region": "Trakiya",
                "type": "Apartment",
                "bedrooms": 3,
                "area": 108.20,
                "price": 88000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00010.jpg?alt=media&token=4b0b7c85-c092-4644-a542-461b23d5421b",
                "address": "Zh.K.Trakiya 202 4023 'Lulacite', Plovdiv",
                "latitude": 42.1290896,
                "longitude": 24.7744457
            },
            {
                "id": 11,
                "refNumber": "00011",
                "region": "Trakiya",
                "type": "House",
                "bedrooms": 4,
                "area": 245.00,
                "price": 120000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00011.jpg?alt=media&token=3d3e8c1c-dd2b-4c6d-bfa0-b354ac65f57d",
                "address": "Zh.K.Trakiya 194А 4023 'Panajot Volov', Plovdiv",
                "latitude": 42.1296512,
                "longitude": 24.7770779
            },
            {
                "id": 12,
                "refNumber": "00012",
                "region": "Trakiya",
                "type": "House",
                "bedrooms": 3,
                "area": 198.00,
                "price": 111000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00012.jpg?alt=media&token=9e35be34-cfc2-4894-89a0-3dedae27a38d",
                "address": "ul. 'Saedinenie' 209, 4023 'Lulacite', Plovdiv",
                "latitude": 42.1269493,
                "longitude": 24.7728714
            },
            {
                "id": 13,
                "refNumber": "00013",
                "region": "Western District",
                "type": "House",
                "bedrooms": 4,
                "area": 250.00,
                "price": 234000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00013.jpg?alt=media&token=6e0826c4-6777-470d-be16-d103a74cf021",
                "address": "ul. 'Badeshte' 59-41, 4015 Proslav, Plovdiv",
                "latitude": 42.1215843,
                "longitude": 24.6885752
            },
            {
                "id": 14,
                "refNumber": "00014",
                "region": "Western District",
                "type": "House",
                "bedrooms": 2,
                "area": 120.00,
                "price": 75000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00014.jpg?alt=media&token=d6e05015-804d-4e68-93a9-89241a1a0653",
                "address": "ul. 'Bitolya' 9, 4015 Proslav, Plovdiv ",
                "latitude": 42.1236911,
                "longitude": 24.6817237
            },
            {
                "id": 15,
                "refNumber": "00015",
                "region": "Western District",
                "type": "Apartment",
                "bedrooms": 2,
                "area": 75.55,
                "price": 55000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00015.jpg?alt=media&token=0c298a01-456b-4858-b2e2-1c8af5fe1626",
                "address": "ul. 'Elin Pelin' 87, 4015 Proslav, Plovdiv",
                "latitude": 42.1174765,
                "longitude": 24.6851613
            }
        ]
    },
    {
        "location": {
            "name": "Varna",
            "id": "46ebd526-8839-476a-9ba0-8a9b2c07f3c3"
        },
        "estates": [
            {
                "id": 16,
                "refNumber": "00016",
                "region": "Center",
                "type": "Apartment",
                "bedrooms": 3,
                "area": 99.80,
                "price": 101000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00016.jpg?alt=media&token=118bc9fc-269b-4d1f-bb61-aa8671db6b86",
                "address": "ul. 'Otets Paisiy' 42-44, 9000 Varna Center, Varna",
                "latitude": 43.2170998,
                "longitude": 27.9087292
            },
            {
                "id": 17,
                "refNumber": "00017",
                "region": "Center",
                "type": "Apartment",
                "bedrooms": 2,
                "area": 74.00,
                "price": 65000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00017.jpg?alt=media&token=2924a1bb-264b-4fd8-9da8-13dcb896a736",
                "address": "ul. 'Makedonia' 124-126, 9000 Varna Center, Varna",
                "latitude": 43.2130861,
                "longitude": 27.9122168
            },
            {
                "id": 18,
                "refNumber": "00018",
                "region": "Center",
                "type": "Studio",
                "bedrooms": 1,
                "area": 41.00,
                "price": 29000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00018.jpg?alt=media&token=f93f6877-3ded-4c05-b9f0-26e4639d6838",
                "address": "ul. 'Georgi S. Rakovski' 38-40, 9000 Varna Center, Varna",
                "latitude": 43.210511,
                "longitude": 27.9121269
            },
            {
                "id": 19,
                "refNumber": "00019",
                "region": "Center",
                "type": "Studio",
                "bedrooms": 1,
                "area": 32.88,
                "price": 27225,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00019.jpg?alt=media&token=1fba0a0e-b82f-40ab-b68e-84b2690c3dec",
                "address": "ul. 'Drin' 5-3, 9000 Varna Center, Varna",
                "latitude": 43.2107102,
                "longitude": 27.906253
            },
            {
                "id": 20,
                "refNumber": "00020",
                "region": "Chayka",
                "type": "Studio",
                "bedrooms": 1,
                "area": 46.18,
                "price": 21666,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00020.jpg?alt=media&token=c08d62d8-a8d9-4a94-b45e-b5a778e00cd6",
                "address": "bul. 'Aleksander Stamboliyski' 52, 9010 g.k. Chayka, Varna",
                "latitude": 43.2171257,
                "longitude": 27.9402059
            },
            {
                "id": 21,
                "refNumber": "000211",
                "region": "Chayka",
                "type": "Apartment",
                "bedrooms": 2,
                "area": 66.15,
                "price": 56890,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00021.jpg?alt=media&token=4ef7f842-e344-4e5b-bd30-234f00d838dd",
                "address": "g.k. Chayka, 7A, 9010 g.k. Chayka, Varna",
                "latitude": 43.2174804,
                "longitude": 27.9340946
            }
        ]
    },
    {
        "location": {
            "name": "Burgas",
            "id": "89e13aa2-ba6d-4f55-9cc2-61eba6172c63"
        },
        "estates": [
            {
                "id": 22,
                "refNumber": "00022",
                "region": "Lazur",
                "type": "Apartment",
                "bedrooms": 2,
                "area": 75.00,
                "price": 76000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00022.jpg?alt=media&token=b1d8b82e-d7f3-4a0a-8813-921f7bce399a",
                "address": "ul. 'Kalofer' 21-27, 8001 g.k. Lazur, Burgas",
                "latitude": 42.5093196,
                "longitude": 27.4690113
            },
            {
                "id": 23,
                "refNumber": "00023",
                "region": "Lazur",
                "type": "House",
                "bedrooms": 4,
                "area": 150,
                "price": 120000,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00023.jpg?alt=media&token=896acfc0-d657-454b-89fc-eaa93011fc97",
                "address": "ul. 'Koprivshtitsa' 37, 8001 g.k. Lazur, Burgas",
                "latitude": 42.5097685,
                "longitude": 27.4738318
            },
            {
                "id": 24,
                "refNumber": "00024",
                "region": "Lazur",
                "type": "Apartment",
                "bedrooms": 3,
                "area": 91,
                "price": 98500,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00024.jpg?alt=media&token=6d5da850-a436-4801-bc60-b8cfaf390233",
                "address": "ul. 'Karlovo' 1-19, 8001 g.k. Lazur, Burgas",
                "latitude": 42.5071667,
                "longitude": 27.470127
            },
            {
                "id": 25,
                "refNumber": "00025",
                "region": "Zornitsa",
                "type": "Apartment",
                "bedrooms": 2,
                "area": 78.56,
                "price": 78400,
                "image": "https://firebasestorage.googleapis.com/v0/b/royal-estates-app.appspot.com/o/00025.jpg?alt=media&token=43e74354-d3d0-4169-80ad-bcaebf442e9f",
                "address": "g.k. Zornitsa 48, 8018 g.k. Zornitsa, Burgas",
                "latitude": 42.5153706,
                "longitude": 27.4623285
            }
        ]
    }
];
/* harmony default export */ __webpack_exports__["a"] = (database);
//# sourceMappingURL=mock-database.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_estate_service_mock__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__estate_list_estate_list__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationListPage = /** @class */ (function () {
    function LocationListPage(navCtrl, service, estateService, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.estateService = estateService;
        this.toastCtrl = toastCtrl;
        this.viewMode = "list";
        this.service.getAllLocations()
            .then(function (data) { return _this.locations = data; })
            .catch(function (error) { return alert(error); });
    }
    LocationListPage.prototype.listEstates = function (locationId) {
        console.log(locationId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__estate_list_estate_list__["a" /* EstateListPage */], locationId);
    };
    var _a, _b, _c, _d;
    LocationListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location-list',template:/*ion-inline-start:"C:\Users\Dev_5\Downloads\dreamhouse-mobile-ionic-master\src\pages\location-list\location-list.html"*/'<ion-header>\n\n    <ion-navbar>\n        \n    <ion-title>Locations</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="location-list">\n\n    <ion-list>\n\n        <ion-item-sliding *ngFor="let loc of locations">\n            <button ion-item (click)="listEstates(loc.id)">\n                <h2>{{loc.name}}</h2>\n            </button>\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>\n\n<ion-footer padding>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Dev_5\Downloads\dreamhouse-mobile-ionic-master\src\pages\location-list\location-list.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_estate_service_mock__["a" /* EstateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_estate_service_mock__["a" /* EstateService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_estate_service_mock__["a" /* EstateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_estate_service_mock__["a" /* EstateService */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" ? _d : Object])
    ], LocationListPage);
    return LocationListPage;
}());

//# sourceMappingURL=location-list.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_database__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EstateService = /** @class */ (function () {
    function EstateService() {
    }
    EstateService.prototype.getAllLocations = function () {
        var locations = [];
        __WEBPACK_IMPORTED_MODULE_1__mock_database__["a" /* default */].forEach(function (location) {
            locations.push(location.location);
        });
        return Promise.resolve(locations);
    };
    EstateService.prototype.getAllEstates = function () {
        var estates = [];
        __WEBPACK_IMPORTED_MODULE_1__mock_database__["a" /* default */].forEach(function (location) {
            estates.push(location.estates);
        });
        return Promise.resolve(estates);
    };
    EstateService.prototype.findEstatesByLocation = function (id) {
        var estates = [];
        __WEBPACK_IMPORTED_MODULE_1__mock_database__["a" /* default */].forEach(function (location) {
            if (location.location.id === id) {
                estates = location.estates;
                return;
            }
        });
        return Promise.resolve(estates);
    };
    EstateService.prototype.getEstateById = function (id) {
        var result;
        __WEBPACK_IMPORTED_MODULE_1__mock_database__["a" /* default */].forEach(function (location) {
            location.estates.forEach(function (estate) {
                if (estate.id == id) {
                    result = estate;
                    return;
                }
            });
        });
        return Promise.resolve(result);
    };
    EstateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], EstateService);
    return EstateService;
}());

//# sourceMappingURL=estate-service-mock.js.map

/***/ })

},[291]);
//# sourceMappingURL=main.js.map