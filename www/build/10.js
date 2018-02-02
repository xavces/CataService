webpackJsonp([10],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarqueDetailsPageModule", function() { return MarqueDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marqueDetails__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__ = __webpack_require__(619);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MarqueDetailsPageModule = (function () {
    function MarqueDetailsPageModule() {
    }
    return MarqueDetailsPageModule;
}());
MarqueDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__marqueDetails__["a" /* MarqueDetailsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__marqueDetails__["a" /* MarqueDetailsPage */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__marqueDetails__["a" /* MarqueDetailsPage */],
        ]
    })
], MarqueDetailsPageModule);

//# sourceMappingURL=marqueDetails.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(6);
var map_1 = __webpack_require__(215);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeVideoPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(57);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name Youtube Video Player
 * @description
 * Plays YouTube videos in Native YouTube App
 *
 * @usage
 * For Android 5.0+ you will need to add the following to config.xml
 * ```xml
 * <preference name="YouTubeDataApiKey" value="[YOUR YOUTUBE API]" />
 * ```
 * For more information: https://developers.google.com/youtube/v3/getting-started
 *
 *
 * ```typescript
 * import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
 *
 * constructor(private youtube: YoutubeVideoPlayer) { }
 *
 * ...
 *
 *
 * this.youtube.openVideo('myvideoid');
 *
 * ```
 */
var YoutubeVideoPlayer = (function (_super) {
    __extends(YoutubeVideoPlayer, _super);
    function YoutubeVideoPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Plays a YouTube video
     * @param videoId {string} Video ID
     */
    YoutubeVideoPlayer.prototype.openVideo = function (videoId) { };
    YoutubeVideoPlayer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    YoutubeVideoPlayer.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], YoutubeVideoPlayer.prototype, "openVideo", null);
    YoutubeVideoPlayer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'YoutubeVideoPlayer',
            plugin: 'cordova-plugin-youtube-video-player',
            pluginRef: 'YoutubeVideoPlayer',
            repo: 'https://github.com/ihadeed/CordovaYoutubeVideoPlayer',
            platforms: ['Android', 'iOS']
        })
    ], YoutubeVideoPlayer);
    return YoutubeVideoPlayer;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarqueDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_youtube_video_player__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(216);
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
var MarqueDetailsPage = (function () {
    function MarqueDetailsPage(navCtrl, navParams, toastCtrl, http, youtube) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.youtube = youtube;
        this.shownGroup = null;
        this.listShown = false;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.marqueId = navParams.get('marqueId');
        var newsData = http.get('assets/data/news.json').map(function (res) { return res.json().news; });
        newsData.subscribe(function (data) {
            _this.news = data;
        });
        var servData = http.get('assets/data/services.json').map(function (res) { return res.json().services; });
        servData.subscribe(function (data) {
            _this.services = data;
        });
        var brandData = http.get('assets/data/marques.json').map(function (res) { return res.json().marques; });
        brandData.subscribe(function (data) {
            _this.marques = data;
            if (_this.marques[_this.marqueId].videoId != null) {
                var openVideo = true;
                var vlength = _this.navCtrl.getViews().length;
                var final = new Array();
                for (var _i = 0, _a = _this.navCtrl.getViews(); _i < _a.length; _i++) {
                    var views = _a[_i];
                    if (views != _this.navCtrl.getViews()[vlength - 1]) {
                        final.push(views);
                    }
                }
                for (var _b = 0, final_1 = final; _b < final_1.length; _b++) {
                    var view = final_1[_b];
                    if (view.id == "MarqueDetailsPage") {
                        openVideo = false;
                    }
                }
                if (openVideo) {
                    console.log(openVideo);
                    _this.youtube.openVideo(_this.marques[_this.marqueId].videoId);
                }
            }
        });
    }
    MarqueDetailsPage.prototype.replayVideo = function () {
        this.youtube.openVideo(this.marques[this.marqueId].videoId);
    };
    MarqueDetailsPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    MarqueDetailsPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    MarqueDetailsPage.prototype.prev = function () {
        this.navCtrl.pop();
    };
    MarqueDetailsPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
        console.log("enter");
    };
    MarqueDetailsPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    MarqueDetailsPage.prototype.showService = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages__["g" /* ServiceDetailsPage */], {
            param1: index
        });
    };
    MarqueDetailsPage.prototype.showServicesList = function () {
        var list = document.getElementsByClassName('list');
        if (this.listShown) {
            list[0].setAttribute("hidden", "true");
        }
        else {
            list[0].removeAttribute("hidden");
        }
        this.listShown = !this.listShown;
    };
    MarqueDetailsPage.prototype.showProduct = function (event, index) {
        console.log(index);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages__["e" /* ProductDetailsPage */], {
            productId: index
        });
    };
    MarqueDetailsPage.prototype.showNews = function (event, index) {
        console.log(index);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages__["d" /* NewsDetailsPage */], {
            param1: index
        });
    };
    MarqueDetailsPage.prototype.show = function (event) {
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
    return MarqueDetailsPage;
}());
MarqueDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-marque-details',template:/*ion-inline-start:"C:\Users\Maxime\Downloads\newApp-master\newApp-master\src\pages\marqueDetails\marqueDetails.html"*/'<ion-content *ngIf="marques != null && news != null && services != null" padding style="border-top: 20px solid #488aff">\n  <ion-header no-border style="background-color: rgba(0, 0, 0, 0.2)">\n    <ion-navbar color="primary" hideBackButton="true">\n      <ion-buttons start>\n          <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon></button> \n      </ion-buttons>\n      <ion-title>\n\n      </ion-title>\n      <ion-buttons end>\n        \n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + marques[marqueId].imgCover +\')\'}"></div>\n  <div id="content">\n    <ion-card>\n      <ion-card-content>\n        <div id="profile-info" padding>\n          <div style="position: absolute; left:35%; right:35%; z-index: 1000">\n              <img id="profile-image" [src]="marques[marqueId].imgProfile">\n          </div>\n          <h3 id="profile-name">{{marques[marqueId].content.title}}</h3>\n          <br>\n          <div *ngIf="marques[marqueId].content.citation">\n            <h4 style="font-size: 1.4em">{{marques[marqueId].content.citation}}</h4>\n            <br>\n          </div>\n          <div *ngIf="marques[marqueId].videoId" class="button-video">\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                    <button *ngIf="marqueId == 0" ion-button small style="background-color: #0eae15" (click)="replayVideo()">Rejouer la vidéo &nbsp;&nbsp;<ion-icon name="logo-youtube" style="color: white"></ion-icon></button>\n                    <button *ngIf="marqueId == 1" ion-button small style="background-color: #d01717" (click)="replayVideo()">Rejouer la vidéo &nbsp;&nbsp;<ion-icon name="logo-youtube" style="color: white"></ion-icon></button>\n                    <button *ngIf="marqueId == 2" ion-button small style="background-color: #386ecd" (click)="replayVideo()">Rejouer la vidéo &nbsp;&nbsp;<ion-icon name="logo-youtube" style="color: white"></ion-icon></button>\n                    <button *ngIf="marqueId == 3" ion-button small style="background-color: #cbc40e" (click)="replayVideo()">Rejouer la vidéo &nbsp;&nbsp;<ion-icon name="logo-youtube" style="color: white"></ion-icon></button>\n                    <button *ngIf="marqueId == 4" ion-button small style="background-color: #cc7136" (click)="replayVideo()">Rejouer la vidéo &nbsp;&nbsp;<ion-icon name="logo-youtube" style="color: white"></ion-icon></button>\n                    <button *ngIf="marqueId == 5" ion-button small style="background-color: #962ac8" (click)="replayVideo()">Rejouer la vidéo &nbsp;&nbsp;<ion-icon name="logo-youtube" style="color: white"></ion-icon></button>\n                    <button *ngIf="marqueId == 6" ion-button small style="background-color: #d42649" (click)="replayVideo()">Rejouer la vidéo &nbsp;&nbsp;<ion-icon name="logo-youtube" style="color: white"></ion-icon></button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n          <hr>\n\n          <div *ngIf="marques[marqueId].content.keys != null" class="keys">\n            <ion-scroll zoom="false" scrollX="true" class="scroll">\n              <ion-grid>\n                <ion-row text-center>\n                  <ion-col *ngFor="let key of marques[marqueId].content.keys">\n                    <ion-badge *ngIf="marqueId == 0" style="background-color: #0eae15"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n                    <ion-badge *ngIf="marqueId == 1" style="background-color: #d01717"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n                    <ion-badge *ngIf="marqueId == 2" style="background-color: #386ecd"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n                    <ion-badge *ngIf="marqueId == 3" style="background-color: #cbc40e"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n                    <ion-badge *ngIf="marqueId == 4" style="background-color: #cc7136"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n                    <ion-badge *ngIf="marqueId == 5" style="background-color: #962ac8"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n                    <ion-badge *ngIf="marqueId == 6" style="background-color: #d42649"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n                    <div class="descr">\n                      <p class="max-width: 150px;">{{key.label}}</p>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-scroll>\n            <hr>\n          </div>\n          <div *ngIf="marques[marqueId].content.areas != null">\n            <br>\n            <div *ngFor="let areasCats of marques[marqueId].content.areas">\n              <h3 style="font-size: 1.2em" *ngIf="areasCats.title">{{areasCats.title}}</h3>\n              <br>\n              <div *ngIf="areasCats.parts">\n                <div *ngFor="let part of areasCats.parts">\n                  <h4 *ngIf="part.title">{{part.title}}</h4>\n                  <p *ngIf="part.subtitle">{{part.subtitle}}</p>\n                  <p *ngIf="part.description">{{part.description}}</p>\n                  <div *ngIf="part.points" style="margin-bottom:20px;" text-center>\n                    <ion-scroll zoom="false" scrollX="true" class="scroll">\n                      <ion-row text-center>\n                        <div class="mother">\n                          <div style="white-space: nowrap;" *ngFor="let area of part.points" class="area" style="margin-right:5px;">\n                            <ion-badge style="background-color: #0eae15" *ngIf="marqueId == 0" (click)="show($event)">{{area}}</ion-badge>\n                            <ion-badge style="background-color: #d01717" *ngIf="marqueId == 1" (click)="show($event)">{{area}}</ion-badge>\n                            <ion-badge style="background-color: #386ecd" *ngIf="marqueId == 2" (click)="show($event)">{{area}}</ion-badge>\n                            <ion-badge style="background-color: #cbc40e" *ngIf="marqueId == 3" (click)="show($event)">{{area}}</ion-badge>\n                            <ion-badge style="background-color: #cc7136" *ngIf="marqueId == 4" (click)="show($event)">{{area}}</ion-badge>\n                            <ion-badge style="background-color: #962ac8" *ngIf="marqueId == 5" (click)="show($event)">{{area}}</ion-badge>\n                            <ion-badge style="background-color: #d42649" *ngIf="marqueId == 6" (click)="show($event)">{{area}}</ion-badge>\n                          </div>\n                        </div>\n                      </ion-row>\n                    </ion-scroll>\n                  </div>\n                </div>\n              </div>\n              <p *ngIf="areasCats.conclusion"></p>\n            </div>\n            <hr>\n          </div>\n          <div *ngIf="marques[marqueId].newsId">\n            <h3 style="font-size:1.2em" *ngIf="marques[marqueId].newsId != null">News &amp; Infos</h3>\n            <br>\n            <div *ngIf="marques[marqueId].newsId != null" style="position: relative; height: 150px; margin-bottom: 20px;">\n              <ion-slides pager>\n                <ion-slide *ngFor="let index of marques[marqueId].newsId">\n                  <div (click)="showNews($event, index)">\n                    <img [src]="news[index].img">\n                    <div style="position: absolute; top: 20%; right:10%; left:10%; width: 80%; background-color: rgba(0, 0, 0, 0.5); color: white; padding-top:20px; padding-bottom: 20px;">\n                      {{news[index].title}}\n                    </div>\n                  </div>\n                </ion-slide>\n              </ion-slides>\n            </div>\n            <hr>\n          </div>\n          <div *ngIf="marques[marqueId].content.parts != null">\n            <div *ngFor="let part of marques[marqueId].content.parts">\n              <h3 *ngIf="part.title != null" style="font-size: 1.2em">{{part.title}}</h3>\n              <br>\n              <div *ngIf="part.paragraphes != null">\n                <div *ngFor="let p of part.paragraphes" class="justify-center">\n                  <p *ngIf="p.accrPoints">{{p.accrPoints}}</p>\n                  <p *ngIf="p.accrPointsBold"><b>{{p.accrPointsBold}}</b></p>\n                  <div *ngIf="p.points">\n                    <ul style="color:#666" text-justify>\n                      <li *ngFor="let point of p.points">\n                        {{point.title}}\n                        <div *ngIf="point.subpoints">\n                          <ul>\n                            <li *ngFor="let subpoint of point.subpoints">{{subpoint}}</li>\n                          </ul>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                  <p *ngIf="p.description" text-justify>{{p.description}}</p>\n                  <p *ngIf="p.descriptionBold"><b>{{p.descriptionBold}}</b></p>\n                  <br>\n                </div>\n              </div>\n              <div *ngIf="part.subparts != null" class="justify-center">\n                <div *ngFor="let subpart of part.subparts">\n                  <h5 *ngIf="subpart.title != null">{{subpart.title}}</h5>\n                  <br>\n                  <div *ngIf="subpart.paragraphes != null">\n                    <div *ngFor="let p of subpart.paragraphes">\n                      <p *ngIf="p.accrPoints">{{p.accrPoints}}</p>\n                      <p *ngIf="p.accrPointsBold"><b>{{p.accrPointsBold}}</b></p>\n                      <div *ngIf="p.points">\n                        <ul>\n                          <li *ngFor="let point of p.points">\n                            {{point.title}}\n                            <div *ngIf="point.subpoints">\n                              <ul>\n                                <li *ngFor="let subpoint of point.subpoints">{{subpoint}}</li>\n                              </ul>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                      <p *ngIf="p.description">{{p.description}}</p>\n                      <p *ngIf="p.descriptionBold"><b>{{p.descriptionBold}}</b></p>\n                      <br>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div *ngIf="part.points" class="justify-center" style="color: #666">\n                <ul>\n                  <li *ngFor="let p of part.points">{{p.title}}</li>\n                </ul>\n              </div>\n            </div>\n            <hr>\n          </div>\n          <h3 style="font-size:1.2em" *ngIf="marques[marqueId].servicesId" (click)="showServicesList(listShown)">Nos Services &nbsp;&nbsp;\n            <ion-icon *ngIf="!listShown" name="arrow-up"></ion-icon>\n            <ion-icon *ngIf="listShown" name="arrow-down"></ion-icon>\n          </h3>\n          <br>\n          <ion-list hidden>\n            <ion-item *ngFor="let index of marques[marqueId].servicesId" (click)="showService(index)">\n              <ion-avatar item-start>\n                <img [src]="services[index].imgService">\n              </ion-avatar>\n              <h4>{{services[index].content.title}}</h4>\n              <p>{{services[index].content.subtitle}}</p>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Maxime\Downloads\newApp-master\newApp-master\src\pages\marqueDetails\marqueDetails.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */]])
], MarqueDetailsPage);

//# sourceMappingURL=marqueDetails.js.map

/***/ })

});
//# sourceMappingURL=10.js.map