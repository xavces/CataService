webpackJsonp([8],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productDetails__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_youtube_video_player__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_document_viewer__ = __webpack_require__(630);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProductDetailsPageModule = (function () {
    function ProductDetailsPageModule() {
    }
    return ProductDetailsPageModule;
}());
ProductDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__productDetails__["a" /* ProductDetailsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["b" /* IonicImageViewerModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__productDetails__["a" /* ProductDetailsPage */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_document_viewer__["a" /* DocumentViewer */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__productDetails__["a" /* ProductDetailsPage */],
        ]
    })
], ProductDetailsPageModule);

//# sourceMappingURL=productDetails.module.js.map

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

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * @name Document Viewer
 * @description
 * This plugin offers a slim API to view PDF files which are either stored in the apps assets folder (/www/*) or in any other file system directory available via the cordova file plugin.
 *
 * @usage
 * ```typescript
 * import { DocumentViewer } from '@ionic-native/document-viewer';
 *
 *
 * constructor(private document: DocumentViewer) { }
 *
 * ...
 * const options: DocumentViewerOptions = {
 *   title: 'My PDF'
 * }
 *
 * this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)
 *
 * ```
 *
 * @interfaces
 * DocumentViewerOptions
 */
var DocumentViewer = (function (_super) {
    __extends(DocumentViewer, _super);
    function DocumentViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Displays the email composer pre-filled with data.
     *
     * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
     */
    DocumentViewer.prototype.getSupportInfo = function () { return; };
    /**
     * Check if the document can be shown
     *
     * @param url {string} Url to the file
     * @param contentType {string} Content type of the file
     * @param options {Array<DocumentViewerOptions>} options
     * @param [onPossible] {Function}
     * @param [onMissingApp] {Function}
     * @param [onImpossible] {Function}
     * @param [onError] {Function}
     */
    DocumentViewer.prototype.canViewDocument = function (url, contentType, options, onPossible, onMissingApp, onImpossible, onError) { };
    /**
     * Opens the file
     *
     * @param url {string} Url to the file
     * @param contentType {string} Content type of the file
     * @param options {DocumentViewerOptions} options
     * @param [onShow] {Function}
     * @param [onClose] {Function}
     * @param [onMissingApp] {Function}
     * @param [onError] {Function}
     */
    DocumentViewer.prototype.viewDocument = function (url, contentType, options, onShow, onClose, onMissingApp, onError) { };
    DocumentViewer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    DocumentViewer.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], DocumentViewer.prototype, "getSupportInfo", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, Function, Function, Function, Function]),
        __metadata("design:returntype", void 0)
    ], DocumentViewer.prototype, "canViewDocument", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, Function, Function, Function, Function]),
        __metadata("design:returntype", void 0)
    ], DocumentViewer.prototype, "viewDocument", null);
    DocumentViewer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'Document Viewer',
            plugin: 'cordova-plugin-document-viewer',
            pluginRef: 'SitewaertsDocumentViewer',
            repo: 'https://github.com/sitewaerts/cordova-plugin-document-viewer',
            platforms: ['Android', 'iOS', 'Windows']
        })
    ], DocumentViewer);
    return DocumentViewer;
}(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_youtube_video_player__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages__ = __webpack_require__(216);
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
var ProductDetailsPage = (function () {
    // The account fields for the login form.
    // If you're using the username field with or without email, make
    // sure to add it to the type
    // account: { email: string, password: string } = {
    //   email: '@ e-mail ou pseudo',
    //   password: 'mot de passe'
    // };
    // like = false;
    // Our translated text strings
    // private loginErrorString: string;
    function ProductDetailsPage(navCtrl, navParams, platform, toastCtrl, http, youtube, documentView, imageViewerCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.youtube = youtube;
        this.documentView = documentView;
        this.imageViewerCtrl = imageViewerCtrl;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.productId = navParams.get('productId');
        var servData = http.get('assets/data/services.json').map(function (res) { return res.json().services; });
        servData.subscribe(function (data) {
            _this.services = data;
        });
        var newsData = http.get('assets/data/news.json').map(function (res) { return res.json().news; });
        newsData.subscribe(function (data) {
            _this.news = data;
        });
        var productData = http.get('assets/data/products.json').map(function (res) { return res.json().products; });
        productData.subscribe(function (data) {
            _this.products = data;
        });
        var brandData = http.get('assets/data/marques.json').map(function (res) { return res.json().marques; });
        brandData.subscribe(function (data) {
            _this.marques = data;
            if (_this.products[_this.productId].videoId != null) {
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
                    if (view.id == "ProductDetailsPage") {
                        openVideo = false;
                    }
                }
                if (openVideo) {
                    _this.youtube.openVideo(_this.products[_this.productId].videoId);
                }
            }
        });
    }
    ProductDetailsPage.prototype.openPDF = function (productId) {
        var options = {
            title: productId
        };
        this.documentView.viewDocument('assets/img/products/pdf/' + productId + '.pdf', 'application/pdf', options);
    };
    ProductDetailsPage.prototype.openImg = function (imageToView) {
        var viewer = this.imageViewerCtrl.create(imageToView);
        viewer.present();
    };
    ProductDetailsPage.prototype.replayVideo = function () {
        this.youtube.openVideo(this.products[this.productId].videoId);
    };
    ProductDetailsPage.prototype.prev = function () {
        this.navCtrl.pop();
    };
    ProductDetailsPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    ProductDetailsPage.prototype.showMarque = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages__["c" /* MarqueDetailsPage */], {
            marqueId: this.products[this.productId].idMarque
        });
    };
    ProductDetailsPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    return ProductDetailsPage;
}());
ProductDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-product-details',template:/*ion-inline-start:"C:\Users\Maxime\Downloads\newApp-master\newApp-master\src\pages\productDetails\productDetails.html"*/'<ion-content *ngIf="services != null && news != null && marques != null && products != null" padding style="border-top: 20px solid #488aff">\n  <ion-header no-border style="background-color: rgba(0, 0, 0, 0.2)">\n    <ion-navbar color="primary" hideBackButton="true">\n      <ion-buttons start>\n          <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon></button> \n      </ion-buttons>\n      <ion-title>\n\n      </ion-title>\n      <ion-buttons end>\n        \n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + marques[products[productId].idMarque].imgCover +\')\'}"></div>\n  <div id="content">\n    <ion-card>\n      <ion-card-content>\n        <div id="profile-info" padding>\n          <div style="position: absolute; left:35%; right:35%; z-index: 1000">\n              <img id="profile-image" [src]="products[productId].img">\n          </div>\n          <h3 id="profile-name">{{products[productId].content.title}}</h3>\n          <br>\n          <div *ngIf="products[productId].content.subtitle">\n            <h4 style="font-size: 1.4em">{{products[productId].content.subtitle}}</h4>\n            <br>\n          </div>\n          <ion-grid>\n            <ion-row>\n              <ion-col *ngIf="products[productId].videoId">\n                <button ion-button small color="primary" (click)="replayVideo()">Rejouer la vidéo &nbsp;&nbsp;<ion-icon name="logo-youtube" style="color: white"></ion-icon></button>\n              </ion-col>\n              <ion-col>\n                <button ion-button small color="primary" (click)="openPDF(productId)">Fiche produit &nbsp;&nbsp;<ion-icon name="download" style="color: white"></ion-icon></button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <hr>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <button *ngIf="products[productId].idMarque == 0" ion-button full style="background-color: #0eae15" (click)="showMarque()">{{marques[products[productId].idMarque].title}}</button>\n                <button *ngIf="products[productId].idMarque == 1" ion-button full style="background-color: #d01717" (click)="showMarque()">{{marques[products[productId].idMarque].title}}</button>\n                <button *ngIf="products[productId].idMarque == 2" ion-button full style="background-color: #386ecd" (click)="showMarque()">{{marques[products[productId].idMarque].title}}</button>\n                <button *ngIf="products[productId].idMarque == 3" ion-button full style="background-color: #cbc40e" (click)="showMarque()">{{marques[products[productId].idMarque].title}}</button>\n                <button *ngIf="products[productId].idMarque == 4" ion-button full style="background-color: #cc7136" (click)="showMarque()">{{marques[products[productId].idMarque].title}}</button>\n                <button *ngIf="products[productId].idMarque == 5" ion-button full style="background-color: #962ac8" (click)="showMarque()">{{marques[products[productId].idMarque].title}}</button>\n                <button *ngIf="products[productId].idMarque == 6" ion-button full style="background-color: #d42649" (click)="showMarque()">{{marques[products[productId].idMarque].title}}</button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <hr>\n          <div *ngIf="products[productId].content.parts != null">\n            <div *ngFor="let part of products[productId].content.parts">\n              <h3 *ngIf="part.title != null" style="font-size: 1.2em">{{part.title}}</h3>\n              <p *ngIf="part.intro">{{part.intro}}</p>\n              <ion-thumbnail>\n                <img class="img-thumb" *ngIf="part.img" [src]="part.img" #imageToView (click)="openImg(imageToView)">\n              </ion-thumbnail>\n              <br>\n              <div *ngIf="part.paragraphes != null">\n                <div *ngFor="let p of part.paragraphes" class="justify-center">\n                  <p *ngIf="p.accrPoints">{{p.accrPoints}}</p>\n                  <p *ngIf="p.accrPointsBold"><b>{{p.accrPointsBold}}</b></p>\n                  <div *ngIf="p.points">\n                    <ul style="color:#666" text-justify>\n                      <li *ngFor="let point of p.points">\n                        {{point.title}}\n                        <ion-thumbnail item-center>\n                          <img class="img-thumb" *ngIf="point.img" [src]="point.img" #imageToView (click)="openImg(imageToView)"/>\n                        </ion-thumbnail>\n                        <div *ngIf="point.subpoints">\n                          <ul>\n                            <li *ngFor="let subpoint of point.subpoints">{{subpoint}}</li>\n                          </ul>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                  <p *ngIf="p.description" text-justify>{{p.description}}</p>\n                  <p *ngIf="p.descriptionBold"><b>{{p.descriptionBold}}</b></p>\n                  <br>\n                </div>\n              </div>\n              <div *ngIf="part.subparts != null" class="justify-center">\n                <div *ngFor="let subpart of part.subparts">\n                  <h5 *ngIf="subpart.title != null">{{subpart.title}}</h5>\n                  <img *ngIf="subpart.img" [src]="subpart.img">\n                  <br>\n                  <div *ngIf="subpart.paragraphes != null">\n                    <div *ngFor="let p of subpart.paragraphes">\n                      <p *ngIf="p.accrPoints">{{p.accrPoints}}</p>\n                      <p *ngIf="p.accrPointsBold"><b>{{p.accrPointsBold}}</b></p>\n                      <div *ngIf="p.points">\n                        <ul>\n                          <li *ngFor="let point of p.points">\n                            {{point.title}}\n                            <div *ngIf="point.subpoints">\n                              <ul>\n                                <li *ngFor="let subpoint of point.subpoints">{{subpoint}}</li>\n                              </ul>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                      <p *ngIf="p.description">{{p.description}}</p>\n                      <p *ngIf="p.descriptionBold"><b>{{p.descriptionBold}}</b></p>\n                      <p *ngIf="p.objectif"><b>Objectif:</b> {{p.objectif}}</p>\n                      <br>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div *ngIf="part.points" class="justify-center" style="color: #666">\n                <ul>\n                  <li *ngFor="let p of part.points">{{p}}</li>\n                </ul>\n              </div>\n            </div>\n            <hr>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Maxime\Downloads\newApp-master\newApp-master\src\pages\productDetails\productDetails.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__["a" /* DocumentViewer */], __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */]])
], ProductDetailsPage);

//# sourceMappingURL=productDetails.js.map

/***/ })

});
//# sourceMappingURL=8.js.map