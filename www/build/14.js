webpackJsonp([14],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationPageModule", function() { return ApplicationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__application__ = __webpack_require__(632);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApplicationPageModule = (function () {
    function ApplicationPageModule() {
    }
    return ApplicationPageModule;
}());
ApplicationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__application__["a" /* ApplicationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__application__["a" /* ApplicationPage */]),
        ],
    })
], ApplicationPageModule);

//# sourceMappingURL=application.module.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ApplicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplicationPage = (function () {
    function ApplicationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.application = navParams.get('application');
        console.log(this.application);
    }
    ApplicationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApplicationPage');
    };
    ApplicationPage.prototype.prev = function () {
        this.navCtrl.pop();
    };
    return ApplicationPage;
}());
ApplicationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-application',template:/*ion-inline-start:"C:\Users\Maxime\Downloads\newApp-master\newApp-master\src\pages\application\application.html"*/'<!--\n  Generated template for the ApplicationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary" hideBackButton="true">\n        <ion-buttons start>\n        <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon></button> \n        </ion-buttons>\n        <ion-title>\n          Onet Portfolio\n        </ion-title>\n        <!--\n        <ion-buttons end>\n        <button ion-button icon-left (click)="login()"><ion-icon name="contact"></ion-icon></button>\n        </ion-buttons>-->\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container">\n    <p class="nameApplication">{{application.name}}</p>\n    <div>\n        <ion-card class="card"  *ngFor="let objet of application.objets;">\n                <ion-card-content>\n                    <img class="imageService" (click)="serviceDetail(objet);" [src]="objet.img" \>\n                    <p class="nameService">{{objet.name}}</p>\n                </ion-card-content>\n        </ion-card>                             \n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Maxime\Downloads\newApp-master\newApp-master\src\pages\application\application.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], ApplicationPage);

//# sourceMappingURL=application.js.map

/***/ })

});
//# sourceMappingURL=14.js.map