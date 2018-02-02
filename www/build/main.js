webpackJsonp([16],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(219);
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
var WelcomePage = (function () {
    function WelcomePage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            email: '@ e-mail ou pseudo',
            password: 'mot de passe'
        };
        //this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    /*
    ionViewWillEnter(){
      this.tabBarElement.style.display = 'none';
    }
  
    ionViewWillLeave(){
      this.tabBarElement.style.display = 'flex';
    }
  */
    WelcomePage.prototype.forgot = function () {
        this.navCtrl.push('ForgotPage');
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    // Attempt to login in through our User service
    WelcomePage.prototype.doLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["b" /* MainPage */]);
    };
    WelcomePage.prototype.prev = function () {
        this.tabBarElement.style.display = 'flex';
        this.navCtrl.pop();
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\Maxime\Downloads\newApp-master\newApp-master\src\pages\welcome\welcome.html"*/'<ion-header no-border>\n  <ion-navbar color=\'primary\' hideBackButton="true">\n    <ion-title>\n      \n    </ion-title>\n    <ion-buttons end>\n     \n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="splash-bg">\n    <div class="splash-relative">\n            <div class="splash-logo"></div>\n            <div class="splash-intro">\n                  Service Advisor\n            </div>\n            <br>\n            <div padding>\n            <div class="splash-form">\n              <button ion-button block (click)="signup()"><ion-icon name="logo-linkedin" class="white-text"></ion-icon> &nbsp;&nbsp;Se connecter avec LinkedIn</button>\n              <br>\n              <form (submit)="doLogin()">\n                  <ion-list text-center>\n              \n                    \n                    <ion-item>\n                      <ion-label><ion-icon name="contact" class="white-text"></ion-icon></ion-label>\n                      <ion-input type="text" [(ngModel)]="account.email" name="login"></ion-input>\n                    </ion-item>\n              \n                    <!--\n                    Want to use a Username instead of an Email? Here you go:\n              \n                    <ion-item>\n                      <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n                      <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n                    </ion-item>\n                    -->\n                    <div class="">\n                      \n                    </div>\n                    <ion-item>\n                      <ion-label><ion-icon name="lock" class="white-text"></ion-icon></ion-label>\n                      <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n                    </ion-item>\n              \n                    <button ion-button class="login">Se connecter</button>\n              \n                  </ion-list>\n                </form>                \n              </div>\n          </div>\n          <div class="splash-end">\n              <div class="splash-new">\n                  <a (click)="signup()">Nouveau ? S\'inscrire !</a>\n              </div>\n              <div class="splash-forgot">\n                <a (click)="forgot()">Mot de passe oublié</a>\n              </div>\n          </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Maxime\Downloads\newApp-master\newApp-master\src\pages\welcome\welcome.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/all-service/all-service.module": [
		317,
		6
	],
	"../pages/application/application.module": [
		318,
		14
	],
	"../pages/chat2/chat2.module": [
		319,
		12
	],
	"../pages/marqueDetails/marqueDetails.module": [
		320,
		10
	],
	"../pages/news/news.module": [
		321,
		5
	],
	"../pages/newsDetails/newsDetails.module": [
		322,
		11
	],
	"../pages/productDetails/productDetails.module": [
		323,
		8
	],
	"../pages/result/result.module": [
		324,
		0
	],
	"../pages/serviceDetails/serviceDetails.module": [
		325,
		9
	],
	"../pages/signup/signup.module": [
		326,
		7
	],
	"../pages/simple-form/simple-form.module": [
		327,
		2
	],
	"../pages/simple-form1/simple-form1.module": [
		328,
		4
	],
	"../pages/simple-form2/simple-form2.module": [
		329,
		3
	],
	"../pages/tabs/tabs.module": [
		330,
		13
	],
	"../pages/tinderQ2/tinderQ2.module": [
		331,
		1
	],
	"../pages/welcome/welcome.module": [
		332,
		15
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return WelcomePage; });
/* unused harmony export HomePage */
/* unused harmony export SimpleFormPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SimpleForm1Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SimpleForm2Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return TinderQ2Page; });
/* unused harmony export Chat2Page */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ServiceDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MarqueDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NewsDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ProductDetailsPage; });
/* unused harmony export ApplicationDetailsPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ResultPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllServicePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Tab3Root; });
// The page the user lands on after opening the app and without a session
// The page the user lands on after opening the app and without a session
var WelcomePage = 'WelcomePage';
var HomePage = 'HomePage';
var SimpleFormPage = 'SimpleFormPage';
var SimpleForm1Page = 'SimpleForm1Page';
var SimpleForm2Page = 'SimpleForm2Page';
var TinderQ2Page = 'TinderQ2Page';
var Chat2Page = 'Chat2Page';
var ServiceDetailsPage = 'ServiceDetailsPage';
var MarqueDetailsPage = 'MarqueDetailsPage';
var NewsDetailsPage = 'NewsDetailsPage';
var ProductDetailsPage = 'ProductDetailsPage';
var ApplicationDetailsPage = 'ApplicationDetailsPage';
var ResultPage = 'ResultPage';
var MainPage = 'TabsPage';
var AllServicePage = 'AllServicePage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'NewsPage';
var Tab2Root = 'SimpleForm1Page';
var Tab3Root = 'Chat2Page';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(254);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_speech_recognition__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_swing__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_swing__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { TabsPage } from '../pages/tabs/tabs';



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__["b" /* IonicImageViewerModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10_angular2_swing__["SwingModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/all-service/all-service.module#AllServicePageModule', name: 'AllServicePage', segment: 'all-service', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/application/application.module#ApplicationPageModule', name: 'ApplicationPage', segment: 'application', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat2/chat2.module#Chat2PageModule', name: 'Chat2Page', segment: 'chat2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/marqueDetails/marqueDetails.module#MarqueDetailsPageModule', name: 'MarqueDetailsPage', segment: 'marqueDetails', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/newsDetails/newsDetails.module#NewsDetailsPageModule', name: 'NewsDetailsPage', segment: 'newsDetails', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/productDetails/productDetails.module#ProductDetailsPageModule', name: 'ProductDetailsPage', segment: 'productDetails', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/serviceDetails/serviceDetails.module#ServiceDetailsPageModule', name: 'ServiceDetailsPage', segment: 'serviceDetails', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/simple-form/simple-form.module#SimpleFormPageModule', name: 'SimpleFormPage', segment: 'simple-form', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/simple-form1/simple-form1.module#SimpleFormPageModule', name: 'SimpleForm1Page', segment: 'simple-form1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/simple-form2/simple-form2.module#SimpleFormPageModule', name: 'SimpleForm2Page', segment: 'simple-form2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tinderQ2/tinderQ2.module#TinderQ2PageModule', name: 'TinderQ2Page', segment: 'tinderQ2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_speech_recognition__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var MyApp = (function () {
    function MyApp(speech, platform, statusBar, splashScreen) {
        this.speech = speech;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.getPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permission, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.speech.requestPermission()];
                    case 1:
                        permission = _a.sent();
                        console.log(permission);
                        return [2 /*return*/, permission];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Maxime\Downloads\newApp-master\newApp-master\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Maxime\Downloads\newApp-master\newApp-master\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_speech_recognition__["a" /* SpeechRecognition */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[249]);
//# sourceMappingURL=main.js.map