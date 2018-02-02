webpackJsonp([11],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailsPageModule", function() { return NewsDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newsDetails__ = __webpack_require__(635);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewsDetailsPageModule = (function () {
    function NewsDetailsPageModule() {
    }
    return NewsDetailsPageModule;
}());
NewsDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__newsDetails__["a" /* NewsDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__newsDetails__["a" /* NewsDetailsPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__newsDetails__["a" /* NewsDetailsPage */]
        ]
    })
], NewsDetailsPageModule);

//# sourceMappingURL=newsDetails.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(6);
var map_1 = __webpack_require__(215);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
var NewsDetailsPage = (function () {
    // The account fields for the login form.
    // If you're using the username field with or without email, make
    // sure to add it to the type
    // account: { email: string, password: string } = {
    //   email: '@ e-mail ou pseudo',
    //   password: 'mot de passe'
    // };
    // Our translated text strings
    // private loginErrorString: string;
    function NewsDetailsPage(navCtrl, navParams, toastCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.newsId = navParams.get('param1');
        console.log(this.newsId);
        var newsData = http.get('assets/data/news.json').map(function (res) { return res.json().news; });
        newsData.subscribe(function (data) {
            _this.news = data;
        });
        var brandData = http.get('assets/data/marques.json').map(function (res) { return res.json().marques; });
        brandData.subscribe(function (data) {
            _this.marques = data;
        });
        var productData = http.get('assets/data/products.json').map(function (res) { return res.json().products; });
        productData.subscribe(function (data) {
            _this.products = data;
        });
    }
    NewsDetailsPage.prototype.prev = function () {
        this.navCtrl.pop();
    };
    NewsDetailsPage.prototype.showMarque = function () {
        console.log(this.news[this.newsId].marqueId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["c" /* MarqueDetailsPage */], {
            marqueId: this.news[this.newsId].marqueId
        });
    };
    NewsDetailsPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    NewsDetailsPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    NewsDetailsPage.prototype.show = function (event) {
        if (event.srcElement.style.wordBreak == "normal") {
            event.srcElement.style.wordBreak = "break-word";
            event.srcElement.style.width = "100px";
        }
        else {
            event.srcElement.style.wordBreak = "normal";
            event.srcElement.style.width = "100%";
            event.srcElement.style.minWidth = "100px";
        }
    };
    return NewsDetailsPage;
}());
NewsDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-news-details',template:/*ion-inline-start:"C:\Users\Maxime\Downloads\newApp-master\newApp-master\src\pages\newsDetails\newsDetails.html"*/'<ion-content *ngIf="news != null && marques != null && products != null" padding style="border-top: 20px solid #488aff">\n  <ion-header no-border style="background-color: rgba(0, 0, 0, 0.2)">\n    <ion-navbar color="primary" hideBackButton="true">\n      <ion-buttons start>\n          <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon></button> \n      </ion-buttons>\n      <ion-title>\n\n      </ion-title>\n      <ion-buttons end>\n        \n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n<div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + marques[news[newsId].marqueId].imgCover +\')\'}"></div>\n<div id="content">\n  <ion-card>\n    <ion-card-content>\n  <div id="profile-info" padding>\n    <div style="position: absolute; left:35%; right:35%; z-index: 1000">\n        <img id="profile-image" [src]="news[newsId].img">\n    </div>\n    <h3 id="profile-name">{{news[newsId].content.title}}</h3>\n    <br>\n    <div *ngIf="news[newsId].content.subtitle">\n      <h4 style="font-size: 1.4em">{{news[newsId].content.subtitle}}</h4>\n      <br>\n    </div>\n    <hr>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button *ngIf="news[newsId].marqueId == 0" ion-button full style="background-color: #0eae15" (click)="showMarque()">{{marques[news[newsId].marqueId].title}}</button>\n          <button *ngIf="news[newsId].marqueId == 1" ion-button full style="background-color: #d01717" (click)="showMarque()">{{marques[news[newsId].marqueId].title}}</button>\n          <button *ngIf="news[newsId].marqueId == 2" ion-button full style="background-color: #386ecd" (click)="showMarque()">{{marques[news[newsId].marqueId].title}}</button>\n          <button *ngIf="news[newsId].marqueId == 3" ion-button full style="background-color: #cbc40e" (click)="showMarque()">{{marques[news[newsId].marqueId].title}}</button>\n          <button *ngIf="news[newsId].marqueId == 4" ion-button full style="background-color: #cc7136" (click)="showMarque()">{{marques[news[newsId].marqueId].title}}</button>\n          <button *ngIf="news[newsId].marqueId == 5" ion-button full style="background-color: #962ac8" (click)="showMarque()">{{marques[news[newsId].marqueId].title}}</button>\n          <button *ngIf="news[newsId].marqueId == 6" ion-button full style="background-color: #d42649" (click)="showMarque()">{{marques[news[newsId].marqueId].title}}</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <hr style="margin-bottom: 20px;">\n    <div *ngIf="news[newsId].content.introBold" class="justify-center">\n      <p><b>{{news[newsId].content.introBold}}</b></p>\n      <br>\n    </div>\n    <div *ngIf="news[newsId].content.intro" class="justify-center">\n      <p *ngFor="let intro of news[newsId].content.intro">{{intro}}</p>\n      <br>\n    </div>\n    <div *ngIf="news[newsId].content.pointsIntro != null" class="justify-center">\n      <ul>\n        <li *ngFor="let point of news[newsId].content.pointsIntro"> {{point}} </li>\n      </ul>\n    </div>\n    <br><br>\n    <div *ngIf="news[newsId].content.parts != null">\n      <div *ngFor="let part of news[newsId].content.parts">\n        <h3 *ngIf="part.title != null" style="font-size: 1.2em">{{part.title}}</h3>\n        <br>\n        <div *ngIf="part.paragraphes != null">\n          <div *ngFor="let p of part.paragraphes">\n            <p *ngIf="p.accrPoints" class="justify-center">{{p.accrPoints}}</p>\n            <p *ngIf="p.accrPointsBold" class="justify-center"><b>{{p.accrPointsBold}}</b></p>\n            <div *ngIf="p.points" class="justify-center">\n              <ul style="color:#666" text-justify>\n                <li *ngFor="let point of p.points">\n                  {{point.title}}\n                  <div *ngIf="point.subpoints">\n                    <ul>\n                      <li *ngFor="let subpoint of point.subpoints">{{subpoint}}</li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </div>\n            <p *ngIf="p.description" class="justify-center">{{p.description}}</p>\n            <p *ngIf="p.descriptionBold" class="justify-center"><b>{{p.descriptionBold}}</b></p>\n            <div *ngIf="p.temoignage" class="temoignage-back">\n              <div class="temoignage" >\n                  <ion-card text-center>   \n                    <ion-item style="margin-right: 50px;">\n                      <ion-avatar item-start>\n                        <img [src]="p.temoignage.authorImg">\n                      </ion-avatar>\n                      <h2 text-center style="color: white">{{p.temoignage.author}}</h2>\n                      <p text-center>{{p.temoignage.function}}</p>\n                    </ion-item>\n                    <hr>\n                    <ion-card-content>\n                      <p style="color:#8e9093; font-size: 1.2em"><i>{{p.temoignage.content}}</i></p>\n                    </ion-card-content>\n                  </ion-card>\n                </div>\n            </div>\n            <br>\n          </div>\n        </div>\n        <div *ngIf="part.points" class="justify-center" style="color: #666">\n          <ul>\n            <li *ngFor="let p of part.points">{{p}}</li>\n          </ul>\n        </div>\n        <br>\n      </div>\n    </div>\n    <!-- <p> &bull; {{services.location}}</p>\n    <p class="profile-description">{{service.description}}</p>\n    <button ion-button (click)="seeMarque()">Voir la marque</button>\n    <button ion-button *ngIf="!like" small color="purple" (click)="follow()">Je n\'aime plus</button>\n    <button ion-button *ngIf="like" class="follow-button" small color="purple" (click)="follow()">J\'aime <ion-icon name="checkmark"></ion-icon></button> -->\n  </div>\n</ion-card-content>\n</ion-card>\n</div>\n</ion-content>'/*ion-inline-end:"C:\Users\Maxime\Downloads\newApp-master\newApp-master\src\pages\newsDetails\newsDetails.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], NewsDetailsPage);

//# sourceMappingURL=newsDetails.js.map

/***/ })

});
//# sourceMappingURL=11.js.map