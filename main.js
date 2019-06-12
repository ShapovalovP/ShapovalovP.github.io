(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/album.service.ts":
/*!**********************************!*\
  !*** ./src/app/album.service.ts ***!
  \**********************************/
/*! exports provided: AlbumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumService", function() { return AlbumService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _album__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./album */ "./src/app/album.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumService = /** @class */ (function () {
    // tabAlbum: Album[] = [];
    function AlbumService(http) {
        this.http = http;
    }
    AlbumService.prototype.loadAlbum = function (art) {
        /*  console.log("LOAD ALBUM");
          console.log(art);*/
        var _this = this;
        return this.http.get('https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + art + '&api_key=9a8a3facebbccaf363bb9fd68fa37abf&format=json&format=json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (repon) { return _this.parsAlbum(repon); }));
    };
    AlbumService.prototype.parsAlbum = function (repon) {
        var tabAlbum = [];
        for (var _i = 0, _a = repon.topalbums.album; _i < _a.length; _i++) {
            var alb = _a[_i];
            tabAlbum.push(new _album__WEBPACK_IMPORTED_MODULE_2__["Album"](alb.name, alb.image[3]['#text'], alb.artist.name));
            /* console.log("PARAM");
             console.log(alb.image);*/
        }
        return tabAlbum;
    };
    AlbumService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AlbumService);
    return AlbumService;
}());



/***/ }),

/***/ "./src/app/album.ts":
/*!**************************!*\
  !*** ./src/app/album.ts ***!
  \**************************/
/*! exports provided: Album */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Album", function() { return Album; });
var Album = /** @class */ (function () {
    function Album(titr, imag, artNom) {
        this.titr = titr;
        this.imag = imag;
        this.artNom = artNom;
    }
    return Album;
}());



/***/ }),

/***/ "./src/app/album/album.component.css":
/*!*******************************************!*\
  !*** ./src/app/album/album.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/album/album.component.html":
/*!********************************************!*\
  !*** ./src/app/album/album.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"services\" id=\"album\">\n\n<div class=\"container\">\n  <div class=\"row\">\n    <mat-toolbar color=\"primary\">\n\n      <button mat-raised-button style=\"margin: 5px\" color=\"warn\"[routerLink]=\"['/']\">{{'artist.home'| translate}}</button>\n      <h1 style=\"margin: 5px\"> {{'artist.name'| translate}}</h1>\n    </mat-toolbar>\n  </div>\n\n  <div class=\"row\" >\n\n       <mat-card class=\"col-md-3\" style=\"background: darkorange; margin: 20px\"  *ngFor=\"let a of tabAlb\" [routerLink]=\"['/', a.artNom, 'album' ,a.titr]\"> <!--VAZHNO tyt propisivaetsia put kotorii v app.module!!!!!-->\n\n       <mat-card-header> <h5 style=\"color: white;\">{{a.titr| placeholder:'nom'}}</h5> </mat-card-header>\n\n       <img mat-card-image src=\"{{a.imag | placeholder:'icon'}}\">\n       </mat-card>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/album/album.component.ts":
/*!******************************************!*\
  !*** ./src/app/album/album.component.ts ***!
  \******************************************/
/*! exports provided: AlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumComponent", function() { return AlbumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _album_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../album.service */ "./src/app/album.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumComponent = /** @class */ (function () {
    function AlbumComponent(ser, route) {
        this.ser = ser;
        this.route = route;
        this.tabAlb = [];
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        var artist = this.route.snapshot.paramMap.get('artist'); ///////VAZHNO!!!!!!!!!!!!!!!!!!!!!!!!!!
        /*console.log("PARAM");
        console.log(artist);*/
        this.ser.loadAlbum(artist).subscribe(function (rep) { return _this.tabAlb = rep; });
    };
    AlbumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-album',
            template: __webpack_require__(/*! ./album.component.html */ "./src/app/album/album.component.html"),
            styles: [__webpack_require__(/*! ./album.component.css */ "./src/app/album/album.component.css")]
        }),
        __metadata("design:paramtypes", [_album_service__WEBPACK_IMPORTED_MODULE_1__["AlbumService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AlbumComponent);
    return AlbumComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 300px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _artist_artist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artist/artist.component */ "./src/app/artist/artist.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    /////////////////////////////////4) dlia perevoda(takge pohozhee dobavil v drygie klassi )   teper idem v  papky assets i sozdaem papky i18n v papke sozdaem dokymenti tsconfig.jsonFile
    function AppComponent(translate) {
        this.translate = translate;
        this.title = 'new';
        this.arti = _artist_artist_component__WEBPACK_IMPORTED_MODULE_1__["ArtistComponent"];
        translate.setDefaultLang('fr');
    }
    AppComponent.prototype.changerLangue = function (langue) {
        this.translate.use(langue);
    };
    //////////////////////////////////////////////////////////////////////////////
    AppComponent.prototype.onSelect = function (artist) {
        this.selectedArtist = artist;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _artist_artist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artist/artist.component */ "./src/app/artist/artist.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _artist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./artist.service */ "./src/app/artist.service.ts");
/* harmony import */ var _album_album_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./album/album.component */ "./src/app/album/album.component.ts");
/* harmony import */ var _album_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./album.service */ "./src/app/album.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chanson_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chanson.service */ "./src/app/chanson.service.ts");
/* harmony import */ var _chanson_chanson_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chanson/chanson.component */ "./src/app/chanson/chanson.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _spectacle_spectacle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./spectacle/spectacle.component */ "./src/app/spectacle/spectacle.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _youtubb_youtubb_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./youtubb/youtubb.component */ "./src/app/youtubb/youtubb.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _placeholder_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./placeholder.pipe */ "./src/app/placeholder.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















 ////npm install @agm/core --save
 //// sozdaem pipe i nazivaem ego
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _artist_artist_component__WEBPACK_IMPORTED_MODULE_3__["ArtistComponent"],
                _album_album_component__WEBPACK_IMPORTED_MODULE_6__["AlbumComponent"],
                _chanson_chanson_component__WEBPACK_IMPORTED_MODULE_10__["ChansonComponent"],
                _spectacle_spectacle_component__WEBPACK_IMPORTED_MODULE_12__["SpectacleComponent"],
                _youtubb_youtubb_component__WEBPACK_IMPORTED_MODULE_14__["YoutubbComponent"],
                _placeholder_pipe__WEBPACK_IMPORTED_MODULE_18__["PlaceholderPipe"],
            ],
            imports: [
                _material_material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                    // { path: '', redirectTo: '/artists', pathMatch: 'full' }, //  Route par défaut, on redirige vers la route artists
                    { path: '', component: _artist_artist_component__WEBPACK_IMPORTED_MODULE_3__["ArtistComponent"] },
                    // { path: 'albums/:artist', component: AlbumComponent }, //  Composant Bio, la route comprend un paramètre
                    { path: ':artist', component: _album_album_component__WEBPACK_IMPORTED_MODULE_6__["AlbumComponent"] },
                    { path: ':artist/album/:album', component: _chanson_chanson_component__WEBPACK_IMPORTED_MODULE_10__["ChansonComponent"] },
                    { path: ':artist/chanson/:chanson', component: _youtubb_youtubb_component__WEBPACK_IMPORTED_MODULE_14__["YoutubbComponent"] },
                    { path: ':artist/spectacle', component: _spectacle_spectacle_component__WEBPACK_IMPORTED_MODULE_12__["SpectacleComponent"] }
                    // { path: 'chansons/:artist/:album', component: ChansonComponent }//  Composant Bio, la route comprend un paramètre
                ]),
                _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDMVfcBkTVqhDw2NoU2qj_2GPeWBhR__48' //// //// 1) v Terminale : npm install @agm/core --save 2 ) zdes vstavil AgmCoreModule  pereshol v app.component.ts
                }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                })
            ],
            providers: [_artist_service__WEBPACK_IMPORTED_MODULE_5__["ArtistService"], _album_service__WEBPACK_IMPORTED_MODULE_7__["AlbumService"], _chanson_service__WEBPACK_IMPORTED_MODULE_9__["ChansonService"], _placeholder_pipe__WEBPACK_IMPORTED_MODULE_18__["PlaceholderPipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/artist.service.ts":
/*!***********************************!*\
  !*** ./src/app/artist.service.ts ***!
  \***********************************/
/*! exports provided: ArtistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistService", function() { return ArtistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _artist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artist */ "./src/app/artist.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtistService = /** @class */ (function () {
    function ArtistService(http) {
        this.http = http;
        this.arts = [];
        var t = JSON.parse(localStorage.getItem('tout'));
        if (t != null) {
            this.arts = t;
        }
    }
    ArtistService.prototype.loadArtist = function (artistName) {
        var _this = this;
        return this.http.get('https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=9a8a3facebbccaf363bb9fd68fa37abf&format=json&artist=' + artistName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (repp) { return _this.parsArts(repp); }));
    };
    ArtistService.prototype.parsArts = function (re) {
        var artistCour;
        artistCour = new _artist__WEBPACK_IMPORTED_MODULE_2__["Artist"](re.artist.name, re.artist.image[4]['#text']);
        if (artistCour.nom != null && artistCour.image !== '') {
            if (!this.exist(artistCour.nom)) {
                this.arts.push(artistCour);
                localStorage.setItem('tout', JSON.stringify(this.arts));
            }
            return artistCour;
        }
    };
    ArtistService.prototype.exist = function (name) {
        for (var _i = 0, _a = this.arts; _i < _a.length; _i++) {
            var ar = _a[_i];
            if (ar.nom === name) {
                return true;
            }
        }
        return false;
    };
    ArtistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ArtistService);
    return ArtistService;
}());



/***/ }),

/***/ "./src/app/artist.ts":
/*!***************************!*\
  !*** ./src/app/artist.ts ***!
  \***************************/
/*! exports provided: Artist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Artist", function() { return Artist; });
var Artist = /** @class */ (function () {
    function Artist(nom, image) {
        this.nom = nom;
        this.image = image;
    }
    return Artist;
}());



/***/ }),

/***/ "./src/app/artist/artist.component.css":
/*!*********************************************!*\
  !*** ./src/app/artist/artist.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/artist/artist.component.html":
/*!**********************************************!*\
  !*** ./src/app/artist/artist.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" container\" >\n  <div class=\"row\">\n    <mat-toolbar color=\"primary\">\n\n        <button mat-raised-button style=\"margin: 5px\" color=\"warn\"(click)=\"changerLangue('fr')\">FR</button>\n        <button mat-raised-button color=\"warn\"(click)=\"changerLangue('en')\">EN</button>\n        <h1 style=\"margin: 5px\"> {{'artist.name'| translate}}</h1>\n    </mat-toolbar>\n  </div>\n  <div class=\"row\">\n\n      <form (ngSubmit)=\"ngOnInit()\">\n        <mat-card  style=\"max-width: 2300px;  background: cornsilk ; min-width: 300px  ; margin: 20px;\">\n          <mat-form-field (ngSubmit)=\"ngOnInit()\"   >\n            <input [(ngModel)]=\"name\" name=\"artist\" matInput placeholder=\"{{'artist.new'| translate}}\" >\n          </mat-form-field>\n          <button mat-raised-button color=\"primary\">{{'artist.add'| translate}}</button>\n        </mat-card>\n      </form>\n\n\n  </div>\n</div>\n\n\n<div class=\"about\" id=\"artistes\">\n<div class=\"container\">\n  <div class=\"row\">\n\n      <mat-card  *ngFor=\"let a of ser.arts\"  style=\"max-width: 300px;  background:darkblue;  margin: 20px; height: 400px;  \" >\n        <mat-card-header> <h3 style=\"color: white\"> {{a.nom}} </h3></mat-card-header>\n        <img mat-card-image src= \"{{a.image}}\"[routerLink]=\"['/', a.nom]\">\n        <mat-card-content>\n          <p> <button  mat-fab color=\"warn\" [routerLink]=\"['/', a.nom, 'spectacle']\">{{'artist.spectacle'| translate}}</button></p><!--zdes pomeniat na spectacle!!!!! i  v app.motul PAth-->\n        </mat-card-content>\n      </mat-card>\n\n</div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/artist/artist.component.ts":
/*!********************************************!*\
  !*** ./src/app/artist/artist.component.ts ***!
  \********************************************/
/*! exports provided: ArtistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistComponent", function() { return ArtistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _artist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../artist.service */ "./src/app/artist.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistComponent = /** @class */ (function () {
    /////////////////////////////////4.1) dlia perevoda   v constryktor dobavil i metod dobavil
    function ArtistComponent(ser, translate) {
        this.ser = ser;
        this.translate = translate;
        this.name = null;
        this.artisttTab = [];
        this.artMapTab = new Map();
        translate.setDefaultLang('fr');
    }
    ArtistComponent.prototype.changerLangue = function (langue) {
        this.translate.use(langue);
    };
    //////////////////////////////////////////////////////////////////////////////
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.name != null) {
            this.ser.loadArtist(this.name).subscribe(function (r) {
                _this.artisttTab.push(r);
                _this.artMapTab.set(r.nom, r);
                var a = _this.artMapTab.get(r.nom);
            });
            this.name = '';
        }
    };
    ArtistComponent.prototype.toArray = function () {
        return Array.from(this.artMapTab.values());
    };
    ArtistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-artist',
            template: __webpack_require__(/*! ./artist.component.html */ "./src/app/artist/artist.component.html"),
            styles: [__webpack_require__(/*! ./artist.component.css */ "./src/app/artist/artist.component.css")]
        }),
        __metadata("design:paramtypes", [_artist_service__WEBPACK_IMPORTED_MODULE_1__["ArtistService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ArtistComponent);
    return ArtistComponent;
}());



/***/ }),

/***/ "./src/app/chanson.service.ts":
/*!************************************!*\
  !*** ./src/app/chanson.service.ts ***!
  \************************************/
/*! exports provided: ChansonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChansonService", function() { return ChansonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _chanson_chanson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chanson/chanson */ "./src/app/chanson/chanson.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChansonService = /** @class */ (function () {
    function ChansonService(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.chansonTab = [];
    }
    ChansonService.prototype.parseChanson = function (rep, artist) {
        this.chansonTab = [];
        for (var _i = 0, _a = rep.album.tracks.track; _i < _a.length; _i++) {
            var chans = _a[_i];
            this.chansonTab.push(new _chanson_chanson__WEBPACK_IMPORTED_MODULE_2__["Chanson"](chans.name, artist, ''));
            // console.log(chans.name);
        }
        return this.chansonTab;
    };
    ChansonService.prototype.loadChansons = function (nomArtist, nomAlb) {
        var _this = this;
        return this.http.get('https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=9a8a3facebbccaf363bb9fd68fa37abf&artist=' + nomArtist + '&album=' + nomAlb + '&format=json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (rep) { return _this.parseChanson(rep, nomArtist); }));
    };
    ChansonService.prototype.parsUrl = function (rep) {
        this.uurl = '';
        this.uurl = 'https://www.youtube.com/embed/';
        // console.log('LOAD videoId');
        // console.log(rep.items[0].id.videoId);
        this.uurl = this.uurl + rep.items[0].id.videoId;
        return rep.items[0].id.videoId;
    };
    ChansonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], ChansonService);
    return ChansonService;
}());



/***/ }),

/***/ "./src/app/chanson/chanson.component.css":
/*!***********************************************!*\
  !*** ./src/app/chanson/chanson.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chanson/chanson.component.html":
/*!************************************************!*\
  !*** ./src/app/chanson/chanson.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"row\">\n    <mat-toolbar color=\"primary\">\n\n      <button mat-raised-button style=\"margin: 5px\" color=\"warn\"[routerLink]=\"['/']\">{{'artist.home'| translate}}</button>\n      <button mat-raised-button style=\"margin: 5px\" color=\"warn\" [routerLink]=\"['/', (getNomArtist())]\">{{'artist.albums'| translate}}</button>\n      <h1 style=\"margin: 5px\"> {{'artist.name'| translate}}</h1>\n    </mat-toolbar>\n  </div>\n  <div class=\"services\" id=\"chansons\">\n  <div class=\"row\">\n\n            <mat-card class=\"col-md-4\" [routerLink]=\"['/', c.artist, 'chanson' ,c.titr]\" style=\"background: darkorange; margin-left: 10% ; margin-bottom: 1%  \" *ngFor=\"let c of ser.chansonTab\">\n              <mat-card-header><h3 style=\"color: white\">{{c.titr}}</h3></mat-card-header>\n             <img mat-card-image=\"\"  >\n              <iframe  width=95% height=60% [src] =\"getSafeUrl(c.url)\" ></iframe>\n\n            </mat-card>\n\n    </div>\n   <!-- <app-youtubb> ///tak mozhno vstavit iz drygogo componenta !!!!!\n      <iframe class=\"col-md-12\" height=\"800\" [src]=\"getSafeUrl()\" allowfullscreen></iframe>\n    </app-youtubb>-->\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chanson/chanson.component.ts":
/*!**********************************************!*\
  !*** ./src/app/chanson/chanson.component.ts ***!
  \**********************************************/
/*! exports provided: ChansonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChansonComponent", function() { return ChansonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chanson_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chanson.service */ "./src/app/chanson.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _youtubb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../youtubb.service */ "./src/app/youtubb.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChansonComponent = /** @class */ (function () {
    function ChansonComponent(ser, route, serY, sanitizer) {
        this.ser = ser;
        this.route = route;
        this.serY = serY;
        this.sanitizer = sanitizer;
        this.tabChanson = [];
    }
    ChansonComponent.prototype.ngOnInit = function () {
        var _this = this;
        var artistS = this.route.snapshot.paramMap.get('artist');
        var albumS = this.route.snapshot.paramMap.get('album');
        // console.log("PARAM");
        // console.log(albumS);
        this.ser.loadChansons(artistS, albumS).subscribe(function (r) {
            _this.tabChanson = r;
            var _loop_1 = function (c) {
                console.log('gettttUrlr');
                _this.serY.LoadYtubUrl(c.artist, c.titr).subscribe(function (u) { c.url = u; });
            };
            for (var _i = 0, _a = _this.ser.chansonTab; _i < _a.length; _i++) {
                var c = _a[_i];
                _loop_1(c);
            }
        });
    };
    ChansonComponent.prototype.getNomArtist = function () {
        return this.route.snapshot.paramMap.get('artist');
    };
    ChansonComponent.prototype.getSafeUrl = function (pUrl) { return this.sanitizer.bypassSecurityTrustResourceUrl(pUrl); };
    ChansonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chanson',
            template: __webpack_require__(/*! ./chanson.component.html */ "./src/app/chanson/chanson.component.html"),
            styles: [__webpack_require__(/*! ./chanson.component.css */ "./src/app/chanson/chanson.component.css")]
        }),
        __metadata("design:paramtypes", [_chanson_service__WEBPACK_IMPORTED_MODULE_1__["ChansonService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _youtubb_service__WEBPACK_IMPORTED_MODULE_3__["YoutubbService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], ChansonComponent);
    return ChansonComponent;
}());



/***/ }),

/***/ "./src/app/chanson/chanson.ts":
/*!************************************!*\
  !*** ./src/app/chanson/chanson.ts ***!
  \************************************/
/*! exports provided: Chanson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chanson", function() { return Chanson; });
var Chanson = /** @class */ (function () {
    function Chanson(titr, artist, url) {
        this.titr = titr;
        this.artist = artist;
        this.url = url;
    }
    return Chanson;
}());



/***/ }),

/***/ "./src/app/library.service.ts":
/*!************************************!*\
  !*** ./src/app/library.service.ts ***!
  \************************************/
/*! exports provided: LibraryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryService", function() { return LibraryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LibraryService = /** @class */ (function () {
    function LibraryService() {
        this.ICON = 'https://image.freepik.com/free-icon/music-album_318-43305.jpg';
        this.NOM = 'indifini';
    }
    LibraryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LibraryService);
    return LibraryService;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 ////1) material , npm install --save @angular/material @angular/cdk @angular/animations
//////https://material.angular.io/guide/getting-started     import {MatTableModule} from '@angular/material/table';

var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({ imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"]],
            exports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"]
            ],
            declarations: [] })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/placeholder.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/placeholder.pipe.ts ***!
  \*************************************/
/*! exports provided: PlaceholderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderPipe", function() { return PlaceholderPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _library_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library.service */ "./src/app/library.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaceholderPipe = /** @class */ (function () {
    function PlaceholderPipe(library) {
        this.library = library;
    }
    PlaceholderPipe.prototype.transform = function (value, args) {
        if (value == null || value === '' && args === 'icon') {
            return this.library.ICON;
        }
        else if (value == null || value === '' || value === '(null)' && args === 'nom') {
            return this.library.NOM;
        }
        else {
            return value;
        }
    };
    PlaceholderPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'placeholder'
        }),
        __metadata("design:paramtypes", [_library_service__WEBPACK_IMPORTED_MODULE_1__["LibraryService"]])
    ], PlaceholderPipe);
    return PlaceholderPipe;
}());



/***/ }),

/***/ "./src/app/spectacle.service.ts":
/*!**************************************!*\
  !*** ./src/app/spectacle.service.ts ***!
  \**************************************/
/*! exports provided: SpectacleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpectacleService", function() { return SpectacleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _spectacle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spectacle */ "./src/app/spectacle.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpectacleService = /** @class */ (function () {
    function SpectacleService(http) {
        this.http = http;
        this.spect = [];
    }
    SpectacleService.prototype.LoadSpectalses = function (artistName) {
        var _this = this;
        return this.http.get('https://rest.bandsintown.com/artists/' + artistName + '/events?app_id=MERCI')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reps) { return _this.parsSpectacle(reps); }));
    };
    SpectacleService.prototype.parsSpectacle = function (rep) {
        // const ven = new Venue( rep.venue.contry, rep.venue.city, rep.venue.latitude, rep.venue.name, rep.venue.region, rep.venue.longitude);
        this.spect = [];
        var sp;
        for (var _i = 0, rep_1 = rep; _i < rep_1.length; _i++) {
            var r = rep_1[_i];
            sp = new _spectacle__WEBPACK_IMPORTED_MODULE_1__["Spectacle"](Number(r.venue.latitude), r.lineup[0], Number(r.venue.longitude), r.datetime, r.venue.name);
            this.spect.push(sp);
        }
        return this.spect;
    };
    SpectacleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SpectacleService);
    return SpectacleService;
}());



/***/ }),

/***/ "./src/app/spectacle.ts":
/*!******************************!*\
  !*** ./src/app/spectacle.ts ***!
  \******************************/
/*! exports provided: Spectacle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spectacle", function() { return Spectacle; });
var Spectacle = /** @class */ (function () {
    function Spectacle(lat, name, lng, date, lieu) {
        this.lat = lat;
        this.name = name;
        this.lng = lng;
        this.date = date;
        this.lieu = lieu;
    }
    return Spectacle;
}());



/***/ }),

/***/ "./src/app/spectacle/spectacle.component.css":
/*!***************************************************!*\
  !*** ./src/app/spectacle/spectacle.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 300px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/spectacle/spectacle.component.html":
/*!****************************************************!*\
  !*** ./src/app/spectacle/spectacle.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"services\" id=\"spectacle\">\n  <div class=\"container\">\n\n      <div class=\"row\">\n        <mat-toolbar color=\"primary\">\n\n          <button mat-raised-button style=\"margin: 5px\" color=\"warn\"[routerLink]=\"['/']\">{{'artist.home'| translate}}</button>\n          <h1 style=\"margin: 5px\"> {{'artist.name'| translate}}</h1>\n        </mat-toolbar>\n      </div>\n\n    <div class=\"row\">\n      <mat-card class=\"col-md-3\" style=\"background: darkorange; margin: 30px\" *ngFor=\"let s of ser.spect\" [routerLink]=\"['/',s.name, 'spectacle']\">\n\n        <mat-card-content> <h5 style=\"color: white;\">{{s.date | date }}</h5> </mat-card-content>\n         <agm-map [latitude]= s.lat [longitude]=s.lng>\n            <agm-marker [latitude]=s.lat [longitude]=s.lng></agm-marker>\n          </agm-map>\n\n        <mat-card-header> <h5 style=\"color: white; \">{{s.lieu}}</h5></mat-card-header><!-- \"|date\" eto pipe dlia togo chtob izmeniat format dati https://angular.io/api/common/DatePipe-->\n      </mat-card>\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/spectacle/spectacle.component.ts":
/*!**************************************************!*\
  !*** ./src/app/spectacle/spectacle.component.ts ***!
  \**************************************************/
/*! exports provided: SpectacleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpectacleComponent", function() { return SpectacleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _spectacle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spectacle.service */ "./src/app/spectacle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpectacleComponent = /** @class */ (function () {
    function SpectacleComponent(ser, route) {
        this.ser = ser;
        this.route = route;
        //lat = 51.678418;
        //lng = 7.809007;
        this.name = null;
        this.tabSpec = [];
    }
    SpectacleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name = this.route.snapshot.paramMap.get('artist'); /////////////////////////VAZHNO!!!!!!!!!!!!!!!!!!!!!!!!!!
        if (this.name != null) {
            this.ser.LoadSpectalses(this.name).subscribe(function (s) { _this.tabSpec.push(s[0]); });
        }
    };
    SpectacleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spectacle',
            template: __webpack_require__(/*! ./spectacle.component.html */ "./src/app/spectacle/spectacle.component.html"),
            styles: [__webpack_require__(/*! ./spectacle.component.css */ "./src/app/spectacle/spectacle.component.css")]
        }),
        __metadata("design:paramtypes", [_spectacle_service__WEBPACK_IMPORTED_MODULE_1__["SpectacleService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SpectacleComponent);
    return SpectacleComponent;
}());



/***/ }),

/***/ "./src/app/youtubb.service.ts":
/*!************************************!*\
  !*** ./src/app/youtubb.service.ts ***!
  \************************************/
/*! exports provided: YoutubbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubbService", function() { return YoutubbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YoutubbService = /** @class */ (function () {
    function YoutubbService(http) {
        this.http = http;
    }
    YoutubbService.prototype.LoadYtubUrl = function (nomArtist, nomChanson) {
        var _this = this;
        return this.http.get('https://www.googleapis.com/youtube/v3/search?part=id&maxResults=1&key=AIzaSyDMVfcBkTVqhDw2NoU2qj_2GPeWBhR__48&q=' + nomChanson + '%20' + nomArtist)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rep) { return _this.parsUrl(rep); }));
    };
    YoutubbService.prototype.parsUrl = function (rep) {
        this.uurl = 'https://www.youtube.com/embed/';
        /* console.log('LOAD videoIdn');
         console.log(rep.items[0].id.videoId);*/
        this.uurl = this.uurl + rep.items[0].id.videoId;
        return this.uurl;
    };
    YoutubbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], YoutubbService);
    return YoutubbService;
}());



/***/ }),

/***/ "./src/app/youtubb/youtubb.component.css":
/*!***********************************************!*\
  !*** ./src/app/youtubb/youtubb.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/youtubb/youtubb.component.html":
/*!************************************************!*\
  !*** ./src/app/youtubb/youtubb.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\" container\" >\n  <div class=\"row\">\n    <mat-toolbar color=\"primary\">\n\n      <button mat-raised-button style=\"margin: 5px\" color=\"warn\"[routerLink]=\"['/']\">{{'artist.home'| translate}}</button>\n      <button mat-raised-button style=\"margin: 5px\" color=\"warn\" [routerLink]=\"['/', (getNomArtist())]\">{{'artist.albums'| translate}}</button>\n    </mat-toolbar>\n  </div>\n  <iframe class=\"col-md-12\" height=\"800\" [src]=\"getSafeUrl()\" allowfullscreen></iframe> <!-- 560  315 width=\"1200\" height=\"800\"-->\n\n</div>\n"

/***/ }),

/***/ "./src/app/youtubb/youtubb.component.ts":
/*!**********************************************!*\
  !*** ./src/app/youtubb/youtubb.component.ts ***!
  \**********************************************/
/*! exports provided: YoutubbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubbComponent", function() { return YoutubbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _youtubb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../youtubb.service */ "./src/app/youtubb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubbComponent = /** @class */ (function () {
    function YoutubbComponent(sanitizer, route, ser) {
        this.sanitizer = sanitizer;
        this.route = route;
        this.ser = ser;
        this.url = 'https://www.youtube.com/embed/' + this.idChans;
    }
    YoutubbComponent.prototype.ngOnInit = function () {
        var _this = this;
        var artistS = this.route.snapshot.paramMap.get('artist');
        var titre = this.route.snapshot.paramMap.get('chanson');
        this.ser.LoadYtubUrl(artistS, titre).subscribe(function (r) { return _this.idChans = r; });
    };
    YoutubbComponent.prototype.getNomArtist = function () {
        return this.route.snapshot.paramMap.get('artist');
    };
    YoutubbComponent.prototype.getSafeUrl = function () { return this.sanitizer.bypassSecurityTrustResourceUrl(this.ser.uurl); };
    YoutubbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-youtubb',
            template: __webpack_require__(/*! ./youtubb.component.html */ "./src/app/youtubb/youtubb.component.html"),
            styles: [__webpack_require__(/*! ./youtubb.component.css */ "./src/app/youtubb/youtubb.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _youtubb_service__WEBPACK_IMPORTED_MODULE_3__["YoutubbService"]])
    ], YoutubbComponent);
    return YoutubbComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\1409770\Desktop\tp3ShapovalovFn\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
