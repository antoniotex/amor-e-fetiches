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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-home {\r\n    width: 400px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<header class=\"vertical-center\">  \r\n  \r\n  <h1>\r\n      <img class=\"img-home\" src=\"https://i.imgur.com/Eos65pn.png\" alt=\"Logo da empresa Amor e Fetiches\">\r\n  </h1>  \r\n\r\n  <ul class=\"nav justify-content-center\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link hvr-rectangle-out\" data-toggle=\"modal\" data-target=\"#sobre\">Sobre nós</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link hvr-rectangle-out\" data-toggle=\"modal\" data-target=\"#cha\">Chá de Lingerie</a> \r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link hvr-rectangle-out\" data-toggle=\"modal\" data-target=\"#boutique\">Boutique Sensual</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link hvr-rectangle-out\" data-toggle=\"modal\" data-target=\"#loja\">Loja</a> \r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link hvr-rectangle-out\" data-toggle=\"modal\" data-target=\"#dicas\">Dicas</a> \r\n    </li>    \r\n  </ul>\r\n\r\n</header>\r\n\r\n<app-sobre></app-sobre>\r\n<app-cha-de-lingerie></app-cha-de-lingerie>\r\n<app-boutique-sensual></app-boutique-sensual>\r\n<app-loja></app-loja>\r\n<app-dicas></app-dicas>\r\n\r\n\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dicas_dicas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dicas/dicas.component */ "./src/app/dicas/dicas.component.ts");
/* harmony import */ var _boutique_sensual_boutique_sensual_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boutique-sensual/boutique-sensual.component */ "./src/app/boutique-sensual/boutique-sensual.component.ts");
/* harmony import */ var _cha_de_lingerie_cha_de_lingerie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cha-de-lingerie/cha-de-lingerie.component */ "./src/app/cha-de-lingerie/cha-de-lingerie.component.ts");
/* harmony import */ var _loja_loja_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loja/loja.component */ "./src/app/loja/loja.component.ts");
/* harmony import */ var _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sobre/sobre.component */ "./src/app/sobre/sobre.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _dicas_dicas_component__WEBPACK_IMPORTED_MODULE_3__["DicasComponent"],
                _boutique_sensual_boutique_sensual_component__WEBPACK_IMPORTED_MODULE_4__["BoutiqueSensualComponent"],
                _cha_de_lingerie_cha_de_lingerie_component__WEBPACK_IMPORTED_MODULE_5__["ChaDeLingerieComponent"],
                _loja_loja_component__WEBPACK_IMPORTED_MODULE_6__["LojaComponent"],
                _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_7__["SobreComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/boutique-sensual/boutique-sensual.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/boutique-sensual/boutique-sensual.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/boutique-sensual/boutique-sensual.component.html":
/*!******************************************************************!*\
  !*** ./src/app/boutique-sensual/boutique-sensual.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"boutique\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body vertical-center\">\r\n          <h2 class=\"subtitle\">Boutique works!</h2>\r\n          <p>\r\n            Boutique works!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/boutique-sensual/boutique-sensual.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/boutique-sensual/boutique-sensual.component.ts ***!
  \****************************************************************/
/*! exports provided: BoutiqueSensualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoutiqueSensualComponent", function() { return BoutiqueSensualComponent; });
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

var BoutiqueSensualComponent = /** @class */ (function () {
    function BoutiqueSensualComponent() {
    }
    BoutiqueSensualComponent.prototype.ngOnInit = function () {
    };
    BoutiqueSensualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-boutique-sensual',
            template: __webpack_require__(/*! ./boutique-sensual.component.html */ "./src/app/boutique-sensual/boutique-sensual.component.html"),
            styles: [__webpack_require__(/*! ./boutique-sensual.component.css */ "./src/app/boutique-sensual/boutique-sensual.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BoutiqueSensualComponent);
    return BoutiqueSensualComponent;
}());



/***/ }),

/***/ "./src/app/cha-de-lingerie/cha-de-lingerie.component.css":
/*!***************************************************************!*\
  !*** ./src/app/cha-de-lingerie/cha-de-lingerie.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cha-de-lingerie/cha-de-lingerie.component.html":
/*!****************************************************************!*\
  !*** ./src/app/cha-de-lingerie/cha-de-lingerie.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"cha\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body vertical-center\">\r\n          <h2 class=\"subtitle\">Cha works!</h2>\r\n          <p>\r\n            Cha works!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n"

/***/ }),

/***/ "./src/app/cha-de-lingerie/cha-de-lingerie.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cha-de-lingerie/cha-de-lingerie.component.ts ***!
  \**************************************************************/
/*! exports provided: ChaDeLingerieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChaDeLingerieComponent", function() { return ChaDeLingerieComponent; });
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

var ChaDeLingerieComponent = /** @class */ (function () {
    function ChaDeLingerieComponent() {
    }
    ChaDeLingerieComponent.prototype.ngOnInit = function () {
    };
    ChaDeLingerieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cha-de-lingerie',
            template: __webpack_require__(/*! ./cha-de-lingerie.component.html */ "./src/app/cha-de-lingerie/cha-de-lingerie.component.html"),
            styles: [__webpack_require__(/*! ./cha-de-lingerie.component.css */ "./src/app/cha-de-lingerie/cha-de-lingerie.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChaDeLingerieComponent);
    return ChaDeLingerieComponent;
}());



/***/ }),

/***/ "./src/app/dicas/dicas.component.css":
/*!*******************************************!*\
  !*** ./src/app/dicas/dicas.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dicas/dicas.component.html":
/*!********************************************!*\
  !*** ./src/app/dicas/dicas.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"dicas\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body vertical-center\">\r\n          <h2 class=\"subtitle\">Dicas works!</h2>\r\n          <p>\r\n            Dicas works!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/dicas/dicas.component.ts":
/*!******************************************!*\
  !*** ./src/app/dicas/dicas.component.ts ***!
  \******************************************/
/*! exports provided: DicasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DicasComponent", function() { return DicasComponent; });
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

var DicasComponent = /** @class */ (function () {
    function DicasComponent() {
    }
    DicasComponent.prototype.ngOnInit = function () {
    };
    DicasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dicas',
            template: __webpack_require__(/*! ./dicas.component.html */ "./src/app/dicas/dicas.component.html"),
            styles: [__webpack_require__(/*! ./dicas.component.css */ "./src/app/dicas/dicas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DicasComponent);
    return DicasComponent;
}());



/***/ }),

/***/ "./src/app/loja/loja.component.css":
/*!*****************************************!*\
  !*** ./src/app/loja/loja.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loja/loja.component.html":
/*!******************************************!*\
  !*** ./src/app/loja/loja.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"loja\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body vertical-center\">\r\n          <h2 class=\"subtitle\">Loja works!</h2>\r\n          <p>\r\n            loja works!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/loja/loja.component.ts":
/*!****************************************!*\
  !*** ./src/app/loja/loja.component.ts ***!
  \****************************************/
/*! exports provided: LojaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LojaComponent", function() { return LojaComponent; });
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

var LojaComponent = /** @class */ (function () {
    function LojaComponent() {
    }
    LojaComponent.prototype.ngOnInit = function () {
    };
    LojaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loja',
            template: __webpack_require__(/*! ./loja.component.html */ "./src/app/loja/loja.component.html"),
            styles: [__webpack_require__(/*! ./loja.component.css */ "./src/app/loja/loja.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LojaComponent);
    return LojaComponent;
}());



/***/ }),

/***/ "./src/app/sobre/sobre.component.css":
/*!*******************************************!*\
  !*** ./src/app/sobre/sobre.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sobre/sobre.component.html":
/*!********************************************!*\
  !*** ./src/app/sobre/sobre.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"sobre\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body vertical-center\">\r\n          <h2 class=\"subtitle\">sobre works!</h2>\r\n          <p>\r\n            sobre works!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/sobre/sobre.component.ts":
/*!******************************************!*\
  !*** ./src/app/sobre/sobre.component.ts ***!
  \******************************************/
/*! exports provided: SobreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobreComponent", function() { return SobreComponent; });
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

var SobreComponent = /** @class */ (function () {
    function SobreComponent() {
    }
    SobreComponent.prototype.ngOnInit = function () {
    };
    SobreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sobre',
            template: __webpack_require__(/*! ./sobre.component.html */ "./src/app/sobre/sobre.component.html"),
            styles: [__webpack_require__(/*! ./sobre.component.css */ "./src/app/sobre/sobre.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SobreComponent);
    return SobreComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MP\amor-e-fetiches\amor-e-fetiches\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map