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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar btnText=\"Вход\"></app-navbar>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'live-comments';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/hero/hero.component */ "./src/app/components/hero/hero.component.ts");
/* harmony import */ var _pages_prices_prices_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/prices/prices.component */ "./src/app/pages/prices/prices.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_text_pic_block_text_pic_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/text-pic-block/text-pic-block.component */ "./src/app/components/text-pic-block/text-pic-block.component.ts");
/* harmony import */ var _components_text_block_text_block_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/text-block/text-block.component */ "./src/app/components/text-block/text-block.component.ts");
/* harmony import */ var _components_cta_block_cta_block_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/cta-block/cta-block.component */ "./src/app/components/cta-block/cta-block.component.ts");
/* harmony import */ var _components_pricing_card_pricing_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pricing-card/pricing-card.component */ "./src/app/components/pricing-card/pricing-card.component.ts");
/* harmony import */ var _components_qa_section_qa_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/qa-section/qa-section.component */ "./src/app/components/qa-section/qa-section.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/features/features.component */ "./src/app/components/features/features.component.ts");
/* harmony import */ var _components_features_card_features_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/features-card/features-card.component */ "./src/app/components/features-card/features-card.component.ts");
/* harmony import */ var _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pricing/pricing.component */ "./src/app/components/pricing/pricing.component.ts");


















var appRoutes = [
    { path: 'main', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"] },
    { path: 'pricing', component: _pages_prices_prices_component__WEBPACK_IMPORTED_MODULE_8__["PricesComponent"] },
    { path: '**', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pages_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"],
                _pages_prices_prices_component__WEBPACK_IMPORTED_MODULE_8__["PricesComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _components_text_pic_block_text_pic_block_component__WEBPACK_IMPORTED_MODULE_10__["TextPicBlockComponent"],
                _components_text_block_text_block_component__WEBPACK_IMPORTED_MODULE_11__["TextBlockComponent"],
                _components_cta_block_cta_block_component__WEBPACK_IMPORTED_MODULE_12__["CtaBlockComponent"],
                _components_pricing_card_pricing_card_component__WEBPACK_IMPORTED_MODULE_13__["PricingCardComponent"],
                _components_qa_section_qa_section_component__WEBPACK_IMPORTED_MODULE_14__["QaSectionComponent"],
                _components_features_features_component__WEBPACK_IMPORTED_MODULE_15__["FeaturesComponent"],
                _components_features_card_features_card_component__WEBPACK_IMPORTED_MODULE_16__["FeaturesCardComponent"],
                _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_17__["PricingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/cta-block/cta-block.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/cta-block/cta-block.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block {\r\n    margin: 100px auto;\r\n    max-width: 760px;\r\n}\r\n.heading {\r\n    margin-top: 30px;\r\n    font-size: 48px;\r\n    font-family: \"SF Pro Display Bold\";\r\n    color: #09046A;\r\n}\r\n.text {\r\n    width: 70%;\r\n    margin: 30px auto 25px;\r\n    color: #9DAFBD;\r\n    font-size: 18px;\r\n}\r\n.cta-btn {\r\n    background: #09046A;\r\n    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);\r\n    border-radius: 5px;\r\n    text-decoration: none;\r\n    border: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdGEtYmxvY2svY3RhLWJsb2NrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3RhLWJsb2NrL2N0YS1ibG9jay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrIHtcclxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcclxuICAgIG1heC13aWR0aDogNzYwcHg7XHJcbn1cclxuLmhlYWRpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5IEJvbGRcIjtcclxuICAgIGNvbG9yOiAjMDkwNDZBO1xyXG59XHJcbi50ZXh0IHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0byAyNXB4O1xyXG4gICAgY29sb3I6ICM5REFGQkQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmN0YS1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogIzA5MDQ2QTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/cta-block/cta-block.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/cta-block/cta-block.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center block\">\n  <div class=\"heading\">{{ heading }}</div>\n  <p class=\"text\">{{ text }}</p>\n  <button type=\"button\" class=\"btn btn-primary cta-btn\">{{ btnText }}</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/cta-block/cta-block.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/cta-block/cta-block.component.ts ***!
  \*************************************************************/
/*! exports provided: CtaBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtaBlockComponent", function() { return CtaBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CtaBlockComponent = /** @class */ (function () {
    function CtaBlockComponent() {
    }
    CtaBlockComponent.prototype.ngOnInit = function () {
    };
    CtaBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cta-block',
            template: __webpack_require__(/*! ./cta-block.component.html */ "./src/app/components/cta-block/cta-block.component.html"),
            inputs: ['text', 'heading', 'btnText'],
            styles: [__webpack_require__(/*! ./cta-block.component.css */ "./src/app/components/cta-block/cta-block.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CtaBlockComponent);
    return CtaBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/features-card/features-card.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/features-card/features-card.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    background: #E5E2EA;\r\n    border: 1px solid #D1DBE3;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n}\r\n\r\n.card-pic {\r\n    margin: 55px auto 0 auto;\r\n}\r\n\r\n.heading {\r\n    margin-top: 55px;\r\n    font-size: 18px;\r\n    color: #026FC2;\r\n    font-family: 'SF Pro Display Bold';\r\n}\r\n\r\n.text {\r\n    color: #9DAFBD;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    margin-top: 10px;\r\n    margin-bottom: 47px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWF0dXJlcy1jYXJkL2ZlYXR1cmVzLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZlYXR1cmVzLWNhcmQvZmVhdHVyZXMtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogI0U1RTJFQTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMURCRTM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uY2FyZC1waWMge1xyXG4gICAgbWFyZ2luOiA1NXB4IGF1dG8gMCBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1NXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMwMjZGQzI7XHJcbiAgICBmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5IEJvbGQnO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBjb2xvcjogIzlEQUZCRDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDdweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/features-card/features-card.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/features-card/features-card.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\">\n  <div class=\"container\">\n    <img src=\"{{ imgLink }}\" class=\"img-fluid card-pic\">\n    <div class=\"heading\">{{ heading }}</div>\n    <div class=\"text\">{{ text }}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/features-card/features-card.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/features-card/features-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: FeaturesCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesCardComponent", function() { return FeaturesCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeaturesCardComponent = /** @class */ (function () {
    function FeaturesCardComponent() {
    }
    FeaturesCardComponent.prototype.ngOnInit = function () {
    };
    FeaturesCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-features-card',
            template: __webpack_require__(/*! ./features-card.component.html */ "./src/app/components/features-card/features-card.component.html"),
            inputs: ['heading', 'imgLink', 'text'],
            styles: [__webpack_require__(/*! ./features-card.component.css */ "./src/app/components/features-card/features-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeaturesCardComponent);
    return FeaturesCardComponent;
}());



/***/ }),

/***/ "./src/app/components/features/features.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/features/features.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading {\r\n    color: #09046A;\r\n    font-size: 48px;\r\n    font-family: 'SF Pro Display Bold';\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.postHeading {\r\n    color: #9DAFBD;\r\n    font-size: 18px;\r\n    margin: 0 auto 50px auto;\r\n    width: 70%;\r\n}\r\n\r\n.block {\r\n    margin-top: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWF0dXJlcy9mZWF0dXJlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mZWF0dXJlcy9mZWF0dXJlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmcge1xyXG4gICAgY29sb3I6ICMwOTA0NkE7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5IEJvbGQnO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnBvc3RIZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjOURBRkJEO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gNTBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmJsb2NrIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/features/features.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/features/features.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block text-center\">\n  <div class=\"heading\">{{ heading }}</div>\n  <div class=\"postHeading\">{{ postHeading }}</div>\n  <div class=\"cards\">\n    <div class=\"row\">\n      <div class=\"col-lg\">\n        <app-features-card imgLink=\"./../assets/ava.png\"\n                          heading=\"Feature Title\"\n                          text=\"Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in halls of stone\">\n        </app-features-card>\n      </div>\n      <div class=\"col-lg\">\n        <app-features-card imgLink=\"./../assets/ava.png\"\n                          heading=\"Feature Title\"\n                          text=\"Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in halls of stone\">\n        </app-features-card>\n      </div>\n      <div class=\"col-lg\">\n        <app-features-card imgLink=\"./../assets/ava.png\"\n                          heading=\"Feature Title\"\n                          text=\"Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in halls of stone\">\n        </app-features-card>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/features/features.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/features/features.component.ts ***!
  \***********************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-features',
            template: __webpack_require__(/*! ./features.component.html */ "./src/app/components/features/features.component.html"),
            inputs: ['heading', 'postHeading'],
            styles: [__webpack_require__(/*! ./features.component.css */ "./src/app/components/features/features.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/components/hero/hero.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/hero/hero.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.hero-page {\r\n    padding-top: 40vh;\r\n    padding-bottom: 20vh;\r\n}\r\n.heading {\r\n    max-width: 80%;\r\n    margin-bottom: 24px;\r\n    color: #09046A;\r\n    font-size: 54px;\r\n    font-family: 'SF Pro Display Bold';\r\n    line-height: 110%;\r\n    letter-spacing: -1px;\r\n}\r\n.post-heading {\r\n    max-width: 80%;\r\n    font-family: 'SF Pro Display Light';\r\n    margin-bottom: 43px;\r\n    color: #979797;\r\n}\r\n.cta-btn {\r\n    border-radius: 40px;\r\n    background-color: #09046A;\r\n    color: white;\r\n    text-decoration: none;\r\n    border: none;\r\n    padding: 6px 20px;\r\n}\r\n.cta-btn:hover {\r\n    background-color: #09046A;\r\n    box-shadow: 0 0 20px #979797;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaGVyby1wYWdlIHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHZoO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwdmg7XHJcbn1cclxuLmhlYWRpbmcge1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgY29sb3I6ICMwOTA0NkE7XHJcbiAgICBmb250LXNpemU6IDU0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5IEJvbGQnO1xyXG4gICAgbGluZS1oZWlnaHQ6IDExMCU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxufVxyXG4ucG9zdC1oZWFkaW5nIHtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSBMaWdodCc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0M3B4O1xyXG4gICAgY29sb3I6ICM5Nzk3OTc7XHJcbn1cclxuLmN0YS1idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTA0NkE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcclxufVxyXG4uY3RhLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkwNDZBO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggIzk3OTc5NztcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/hero/hero.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/hero/hero.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-page\">\n  <div class=\"container\">\n    <div class=\"heading\">{{ heading }}</div>\n    <div class=\"post-heading\">{{ postHeading }}</div>    \n    <button type=\"button\" class=\"btn btn-primary cta-btn\">{{ btnText }}</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/hero/hero.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/hero/hero.component.ts ***!
  \***************************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero',
            template: __webpack_require__(/*! ./hero.component.html */ "./src/app/components/hero/hero.component.html"),
            inputs: ['heading', 'postHeading', 'btnText'],
            styles: [__webpack_require__(/*! ./hero.component.css */ "./src/app/components/hero/hero.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    background-color: #f2f2f2;\r\n}\r\n.log-in-btn {\r\n    background-color: #09046A;\r\n    color: white;\r\n    border-radius: 40px;\r\n    padding: 6px 37px;\r\n    font-size: 14px;\r\n    text-decoration: none;\r\n    border: none;\r\n}\r\n.log-in-btn:hover {\r\n        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);\r\n    }\r\n.navbar-toggler, .navbar-toggler:focus, .navbar-toggler:hover {\r\n    border: none;\r\n    outline: none;\r\n}\r\n.nav-item {\r\n    padding: 0 30px;\r\n    font-family: 'SF Pro Display Light';\r\n    color: #9DAFBD;\r\n}\r\na {\r\n    text-decoration: none;\r\n    color: #9DAFBD;\r\n}\r\n.active {\r\n    text-decoration: none;\r\n    color: #09046A;\r\n    font-weight: 600;\r\n}\r\n.navbar-collapse {\r\n    text-align: center;\r\n}\r\n.bottom-nav {\r\n    background-color: white;\r\n}\r\n.navbar-brand {\r\n    background-color: transparent;\r\n}\r\n.bottom-logo {\r\n    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);\r\n}\r\n.logo {\r\n    border-radius: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFDSTtRQUNJLDRDQUE0QztJQUNoRDtBQUVKO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFFQTtJQUNJLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMsY0FBYztBQUNsQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn1cclxuLmxvZy1pbi1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA5MDQ2QTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMzdweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4gICAgLmxvZy1pbi1idG46aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgfVxyXG5cclxuLm5hdmJhci10b2dnbGVyLCAubmF2YmFyLXRvZ2dsZXI6Zm9jdXMsIC5uYXZiYXItdG9nZ2xlcjpob3ZlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSBMaWdodCc7XHJcbiAgICBjb2xvcjogIzlEQUZCRDtcclxufVxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjOURBRkJEO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMDkwNDZBO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3R0b20tbmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYm90dG9tLWxvZ28ge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\">\n  <div class=\"container\">\n    <a *ngIf=\"bigScreen\" class=\"navbar-brand\" routerLink=\"/main\">\n      <img src=\"../assets/top-logo.png\">\n    </a>\n    <a *ngIf=\"smallScreen\" class=\"navbar-brand\" routerLink=\"/main\">\n        <img src=\"../assets/logo.png\" class=\"bottom-logo logo\">\n      </a>\n    <button *ngIf=\"smallScreen\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\" *ngIf=\"smallScreen\">\n      <ul class=\"navbar-nav text-center\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/main\" (click)=\"firstLink()\" [ngClass]=\"firstStatus ? 'active' : ''\">Преимущества</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/pricing\" (click)=\"secondLink()\" [ngClass]=\"secondStatus ? 'active' : ''\">О сервисе</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/pricing\" (click)=\"thirdLink()\" [ngClass]=\"thirdStatus ? 'active' : ''\">Тарифы</a>\n        </li>\n      </ul>\n    </div>\n    <div  id=\"navbarNav\" *ngIf=\"bigScreen\">\n      <ul class=\"nav justifu-content-center\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/main\" (click)=\"firstLink()\" [ngClass]=\"firstStatus ? 'active' : ''\">Преимущества</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/pricing\" (click)=\"secondLink()\" [ngClass]=\"secondStatus ? 'active' : ''\">О сервисе</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/pricing\" (click)=\"thirdLink()\" [ngClass]=\"thirdStatus ? 'active' : ''\">Тарифы</a>\n        </li>\n      </ul>\n    </div>\n    <form *ngIf=\"bigScreen\" class=\"form-inline\">\n        <button type=\"button\" class=\"btn btn-primary log-in-btn\">{{ btnText }}</button>\n    </form>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n<nav class=\"navbar navbar-expand-lg navbar-light bottom-nav\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/main\">\n      <img src=\"../assets/logo.png\" class=\"bottom-logo logo\">\n    </a>  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/main\">Преимущества</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/pricing\">О сервисе</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/pricing\">Тарифы</a>\n          </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.width = window.outerWidth;
        this.bigScreen = this.width > 991;
        this.smallScreen = this.width <= 991;
        this.secondStatus = false;
        this.firstStatus = false;
        this.thirdStatus = false;
        this.isCollapsed = true;
    }
    NavbarComponent.prototype.firstLink = function () {
        this.firstStatus = !this.firstStatus;
        this.secondStatus = false;
        this.thirdStatus = false;
    };
    NavbarComponent.prototype.secondLink = function () {
        this.secondStatus = !this.secondStatus;
        this.firstStatus = false;
        this.thirdStatus = false;
    };
    NavbarComponent.prototype.thirdLink = function () {
        this.thirdStatus = !this.thirdStatus;
        this.firstStatus = false;
        this.secondStatus = false;
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            inputs: ['btnText'],
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/pricing-card/pricing-card.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/pricing-card/pricing-card.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    background: #F2F2F2;\r\n    border-radius: 5px;\r\n    padding: 0 5%;\r\n}\r\n\r\n.center {\r\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.kind {\r\n    text-transform: uppercase;\r\n    color: #9DAFBD;\r\n    font-weight: 600;\r\n    margin-top: 60px;\r\n}\r\n\r\n.price {\r\n    color: #09046A;\r\n    font-weight: 400;\r\n    font-size: 34px;\r\n    margin-top: 12px;\r\n}\r\n\r\n.description {\r\n    color: #9DAFBD;\r\n    margin-top: 8px;\r\n    font-weight: normal;\r\n}\r\n\r\n.spec-descr {\r\n    color: #09046A;\r\n    margin-top: 18px;\r\n    font-weight: bold;\r\n}\r\n\r\n.specOne, .specTwo {\r\n        margin-bottom: 18px;\r\n    }\r\n\r\n.specThree {\r\n        margin-bottom: 28px;\r\n    }\r\n\r\n.pricing-btn {\r\n    border: 1px solid #09046A;\r\n    border-radius: 40px;\r\n    color: #09046A;\r\n    background-color: transparent;\r\n    width: 60%;\r\n    margin: 0 auto 60px auto;\r\n}\r\n\r\n.pricing-btn:hover {\r\n        background-color: #09046A;\r\n        color: white;\r\n    }\r\n\r\n.centerBtn {\r\n        background-color: #09046A;\r\n        color: white;\r\n    }\r\n\r\n.centerBtn:hover {\r\n        background-color: #09046A;\r\n        color: white;\r\n        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmljaW5nLWNhcmQvcHJpY2luZy1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCOztBQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztBQUVKO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVix3QkFBd0I7QUFDNUI7O0FBQ0k7UUFDSSx5QkFBeUI7UUFDekIsWUFBWTtJQUNoQjs7QUFFQTtRQUNJLHlCQUF5QjtRQUN6QixZQUFZO0lBQ2hCOztBQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWiw0Q0FBNEM7SUFDaEQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByaWNpbmctY2FyZC9wcmljaW5nLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDUlO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAyMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4ua2luZCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICM5REFGQkQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICAgIGNvbG9yOiAjMDkwNDZBO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBjb2xvcjogIzlEQUZCRDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5zcGVjLWRlc2NyIHtcclxuICAgIGNvbG9yOiAjMDkwNDZBO1xyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiAgICAuc3BlY09uZSwgLnNwZWNUd28ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgICB9XHJcbiAgICAuc3BlY1RocmVlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gICAgfVxyXG5cclxuLnByaWNpbmctYnRuIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwOTA0NkE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgY29sb3I6ICMwOTA0NkE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0byA2MHB4IGF1dG87XHJcbn1cclxuICAgIC5wcmljaW5nLWJ0bjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA5MDQ2QTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNlbnRlckJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA5MDQ2QTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuY2VudGVyQnRuOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkwNDZBO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/pricing-card/pricing-card.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pricing-card/pricing-card.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\" [ngClass]=\"middleCard === 'true' ? 'center' : ''\">\n  <span class=\"kind\">{{ kind }}</span>\n  <span class=\"price\">{{ price }}</span>\n  <span class=\"description\">{{ description }}</span>\n  <div class=\"spec-descr\">\n    <div class=\"specOne\">{{ specOne }}</div>\n    <div class=\"specTwo\">{{ specTwo }}</div>\n    <div class=\"specThree\">{{ specThree }}</div>\n  </div>\n  <button type=\"button\" [ngClass]=\"middleCard === 'true' ? 'centerBtn' : ''\" class=\"btn btn-primary pricing-btn\">{{ btnText }}</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pricing-card/pricing-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pricing-card/pricing-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: PricingCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingCardComponent", function() { return PricingCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PricingCardComponent = /** @class */ (function () {
    function PricingCardComponent() {
    }
    PricingCardComponent.prototype.ngOnInit = function () {
    };
    PricingCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricing-card',
            template: __webpack_require__(/*! ./pricing-card.component.html */ "./src/app/components/pricing-card/pricing-card.component.html"),
            inputs: ['kind', 'btnText', 'price', 'description', 'specOne', 'specTwo', 'specThree', 'middleCard'],
            styles: [__webpack_require__(/*! ./pricing-card.component.css */ "./src/app/components/pricing-card/pricing-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PricingCardComponent);
    return PricingCardComponent;
}());



/***/ }),

/***/ "./src/app/components/pricing/pricing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pricing/pricing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block {\r\n    margin-top: 140px;\r\n}\r\n\r\n.heading {\r\n    color: #09046A;\r\n    font-size: 48px;\r\n    font-family: \"SF Pro Display Bold\";\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.postHeading {\r\n    font-family: \"SF Pro Display Light\";\r\n    line-height: 30px;\r\n    font-size: 20px;\r\n    color: #979797;\r\n    margin-bottom: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmljaW5nL3ByaWNpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByaWNpbmcvcHJpY2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrIHtcclxuICAgIG1hcmdpbi10b3A6IDE0MHB4O1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgICBjb2xvcjogIzA5MDQ2QTtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5IEJvbGRcIjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5wb3N0SGVhZGluZyB7XHJcbiAgICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheSBMaWdodFwiO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzk3OTc5NztcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/pricing/pricing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pricing/pricing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block text-center\">\n    <div class=\"heading\">{{ heading }}</div>\n    <div class=\"postHeading\">{{ postHeading }}</div>\n    <div class=\"row\">\n      <div class=\"col-lg\">\n        <app-pricing-card kind=\"Базовый\"\n                          price=\"$ 5.95 /mo\"\n                          description=\"Home is behind, the world ahead and there are many paths to tread through shadows to the edge.\"\n                          specOne=\"2 GB Storage\"\n                          specTwo=\"10 GB Bandwidth\"\n                          specThree=\"1 Domain\"\n                          btnText=\"Start free trial\">\n        </app-pricing-card>\n      </div>\n      <div class=\"col-lg\">\n        <app-pricing-card kind=\"Премиум\"\n                          price=\"$ 16.95 /mo\"\n                          description=\"Home is behind, the world ahead and there are many paths to tread through shadows to the edge.\"\n                          specOne=\"2 GB Storage\"\n                          specTwo=\"10 GB Bandwidth\"\n                          specThree=\"1 Domain\"\n                          middleCard=\"true\"\n                          btnText=\"Start free trial\">\n        </app-pricing-card>\n      </div>\n      <div class=\"col-lg\">\n        <app-pricing-card kind=\"Бизнес\"\n                          price=\"$ 27.95 /mo\"\n                          description=\"Home is behind, the world ahead and there are many paths to tread through shadows to the edge.\"\n                          specOne=\"2 GB Storage\"\n                          specTwo=\"10 GB Bandwidth\"\n                          specThree=\"1 Domain\"\n                          btnText=\"Start free trial\">\n        </app-pricing-card>\n      </div>\n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/pricing/pricing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pricing/pricing.component.ts ***!
  \*********************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/components/pricing/pricing.component.html"),
            inputs: ['heading', 'postHeading'],
            styles: [__webpack_require__(/*! ./pricing.component.css */ "./src/app/components/pricing/pricing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/components/qa-section/qa-section.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/qa-section/qa-section.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading {\r\n    font-size: 48px;\r\n    color: #09046A;\r\n    margin-bottom: 19px;\r\n    font-family: 'SF Pro Display Bold';\r\n}\r\n\r\n.postHeading {\r\n    font-size: 20px;\r\n    color: #979797;\r\n    margin-bottom: 75px;\r\n}\r\n\r\n.points {\r\n    color: #979797;\r\n}\r\n\r\n.arrow-icon {\r\n    width: 12px;\r\n    height: 6px;\r\n    margin-right: 23px;\r\n}\r\n\r\n.point {\r\n    font-size: 22px;\r\n    display: flex;\r\n}\r\n\r\n.points:not(las-child) {\r\n        margin-bottom: 15px;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xYS1zZWN0aW9uL3FhLXNlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBQ0k7UUFDSSxtQkFBbUI7SUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3FhLXNlY3Rpb24vcWEtc2VjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgY29sb3I6ICMwOTA0NkE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSBCb2xkJztcclxufVxyXG5cclxuLnBvc3RIZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjOTc5Nzk3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNzVweDtcclxufVxyXG5cclxuLnBvaW50cyB7XHJcbiAgICBjb2xvcjogIzk3OTc5NztcclxufVxyXG5cclxuLmFycm93LWljb24ge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjNweDtcclxufVxyXG5cclxuLnBvaW50IHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuICAgIC5wb2ludHM6bm90KGxhcy1jaGlsZCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/components/qa-section/qa-section.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/qa-section/qa-section.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block\">\n    <div class=\"heading text-center\">{{ heading }}</div>\n    <div class=\"postHeading text-center\">{{ postHeading }}</div>\n    <div class=\"points\" *ngFor=\"let point of points\">\n      <div class=\"point\">\n        <div>\n          <img src=\"../../../assets/arrow.png\" class=\"arrow-icon\">\n        </div>\n        <div>{{ point }}</div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/qa-section/qa-section.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/qa-section/qa-section.component.ts ***!
  \***************************************************************/
/*! exports provided: QaSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaSectionComponent", function() { return QaSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QaSectionComponent = /** @class */ (function () {
    function QaSectionComponent() {
        this.points = [
            "Во время тестового периода комментирующие аккаунты подпишутся на мой профиль?",
            "Меня будут комментировать живые аккаунты?",
            "Комментарии приходят единовременно?",
            "Чем ваш сервис отличается от сайтов накрутки?",
            "На какой пост будут приходить комментарии?",
            "Нужно ли мне вводить свой пароль (заводить аккаунт для раздачи)?",
            "Почему ваш сервис увеличивает охват?",
            "Что будет если я перестану пользоваться программой? Отпишутся от меня аккаунты или будут висеть грузом и мне придется удалять из самостоятельно?"
        ];
    }
    QaSectionComponent.prototype.ngOnInit = function () {
    };
    QaSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-qa-section',
            template: __webpack_require__(/*! ./qa-section.component.html */ "./src/app/components/qa-section/qa-section.component.html"),
            inputs: ['heading', 'points', 'postHeading'],
            styles: [__webpack_require__(/*! ./qa-section.component.css */ "./src/app/components/qa-section/qa-section.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QaSectionComponent);
    return QaSectionComponent;
}());



/***/ }),

/***/ "./src/app/components/text-block/text-block.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/text-block/text-block.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block {\r\n    margin: 100px 0;\r\n}\r\n.liner {\r\n    width: 60%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 220%;\r\n    margin-bottom: 57px;\r\n    color: #09046A;\r\n    text-align: justify;\r\n    letter-spacing: -2px;\r\n    font-family: 'SF Pro Display Light';\r\n}\r\n.name {\r\n    margin-top: 20px;\r\n    font-size: 70%;\r\n    font-weight: 600;\r\n}\r\n.job {\r\n    font-size: 70%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXh0LWJsb2NrL3RleHQtYmxvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsbUNBQW1DO0FBQ3ZDO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGV4dC1ibG9jay90ZXh0LWJsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2sge1xyXG4gICAgbWFyZ2luOiAxMDBweCAwO1xyXG59XHJcbi5saW5lciB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDIyMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1N3B4O1xyXG4gICAgY29sb3I6ICMwOTA0NkE7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5IExpZ2h0JztcclxufVxyXG5cclxuLm5hbWUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogNzAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmpvYiB7XHJcbiAgICBmb250LXNpemU6IDcwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/text-block/text-block.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/text-block/text-block.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block text-center\">\n    <div class=\"liner\">{{ text }}</div>\n    <div class=\"avatar\">\n        <img src=\"{{imgLink}}\">\n        <div class=\"name\">{{ name }}</div>\n        <div class=\"job\">{{ job }}</div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/text-block/text-block.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/text-block/text-block.component.ts ***!
  \***************************************************************/
/*! exports provided: TextBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBlockComponent", function() { return TextBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TextBlockComponent = /** @class */ (function () {
    function TextBlockComponent() {
    }
    TextBlockComponent.prototype.ngOnInit = function () {
    };
    TextBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-text-block',
            template: __webpack_require__(/*! ./text-block.component.html */ "./src/app/components/text-block/text-block.component.html"),
            inputs: ['text', 'imgLink', 'name', 'job'],
            styles: [__webpack_require__(/*! ./text-block.component.css */ "./src/app/components/text-block/text-block.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TextBlockComponent);
    return TextBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/text-pic-block/text-pic-block.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/text-pic-block/text-pic-block.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\r\n    font-size: 18px;\r\n    font-family: 'SF Pro Display Medium';\r\n    color: #9DAFBD;\r\n    margin-top: 10%;\r\n}\r\n.heading {\r\n    margin-top: 20%;\r\n    color: #09046A;\r\n    font-size: 34px;\r\n    font-family: 'SF Pro Display Bold';\r\n}\r\n.picture {\r\n    height: 355px;\r\n    \r\n}\r\n.text-col {\r\n    \r\n}\r\n.row-block {\r\n    margin: 60px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXh0LXBpYy1ibG9jay90ZXh0LXBpYy1ibG9jay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxhQUFhOztBQUVqQjtBQUNBOztBQUVBO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZXh0LXBpYy1ibG9jay90ZXh0LXBpYy1ibG9jay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSBNZWRpdW0nO1xyXG4gICAgY29sb3I6ICM5REFGQkQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLmhlYWRpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgY29sb3I6ICMwOTA0NkE7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NGIFBybyBEaXNwbGF5IEJvbGQnO1xyXG59XHJcbi5waWN0dXJlIHtcclxuICAgIGhlaWdodDogMzU1cHg7XHJcbiAgICBcclxufVxyXG4udGV4dC1jb2wge1xyXG4gICAgXHJcbn1cclxuLnJvdy1ibG9jayB7XHJcbiAgICBtYXJnaW46IDYwcHggMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/text-pic-block/text-pic-block.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/text-pic-block/text-pic-block.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-block\"  *ngIf=\"textAlign === 'left'\">\n  <div class=\"col-lg text-col\">\n      <div class=\"heading\">{{ heading }}</div>\n      <p class=\"text\">{{ text }}</p>\n  </div>\n  <div class=\"col-lg\">\n      <img src='{{imgLink}}' class=\"picture img-fluid\">\n  </div>\n</div>\n<div class=\"row row-block\"  *ngIf=\"textAlign === 'right'\">\n    <div class=\"col-lg\">\n        <img src='{{imgLink}}' class=\"picture img-fluid\">\n    </div>\n    <div class=\"col-lg text-col\">\n        <div class=\"heading\">{{ heading }}</div>\n        <p class=\"text\">{{ text }}</p>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/text-pic-block/text-pic-block.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/text-pic-block/text-pic-block.component.ts ***!
  \***********************************************************************/
/*! exports provided: TextPicBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPicBlockComponent", function() { return TextPicBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TextPicBlockComponent = /** @class */ (function () {
    function TextPicBlockComponent() {
    }
    TextPicBlockComponent.prototype.ngOnInit = function () {
    };
    TextPicBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-text-pic-block',
            template: __webpack_require__(/*! ./text-pic-block.component.html */ "./src/app/components/text-pic-block/text-pic-block.component.html"),
            inputs: ['heading', 'text', 'textAlign', 'imgLink'],
            styles: [__webpack_require__(/*! ./text-pic-block.component.css */ "./src/app/components/text-pic-block/text-pic-block.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TextPicBlockComponent);
    return TextPicBlockComponent;
}());



/***/ }),

/***/ "./src/app/pages/main/main.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/main/main.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grey {\r\n    background-color: #E5E2EA;\r\n    margin: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTJFQTtcclxuICAgIG1hcmdpbjogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/main/main.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/main/main.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-hero heading=\"Сервис для создания активности и стимуляции продаж в Instagram\" \n          postHeading=\"Повышайте вовлеченность своих подписчиков. Увеличивайте органический охват.  Мотивируйте людей к покупке через Instagram.\" \n          btnText=\"Начать бесплатно\">\n</app-hero>\n\n<div class=\"container\">\n  <div style=\"background-color: #f2f2f2\" class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm text-center\">\n        <h3>Balance</h3>\n        <img src=\"../assets/ava.png\" style=\"margin-bottom: 50px\">\n        <p>\n            One of three columns<br>\n            One of three columns<br>\n            One of three columns<br>\n            One of three columns\n        </p>\n      </div>\n      <div class=\"col-sm text-center\">\n        <h3>Profile stats</h3>\n        <img src=\"../assets/ava.png\" style=\"margin-bottom: 50px\">\n        <p>\n            One of three columns<br>\n            One of three columns<br>\n            One of three columns<br>\n            One of three columns\n        </p>\n      </div>\n      <div class=\"col-sm text-center\">\n        <h3>Notification</h3>\n        <img src=\"../assets/ava.png\" style=\"margin-bottom: 50px\">\n        <p>\n            One of three columns<br>\n            One of three columns<br>\n            One of three columns<br>\n            One of three columns\n        </p>\n      </div>\n    </div>\n    <div style=\"margin-top: 80px\">\n        <div class=\"row\">\n        <div class=\"col-sm\">\n          <h2>Statistics</h2>\n        </div>\n        <div class=\"col-sm text-right\">\n            <button type=\"button\" class=\"btn btn-primary\">Monthly</button>\n            <button type=\"button\" class=\"btn btn-primary\">Yearly</button>\n        </div>\n      </div>\n      <img src=\"../assets/Graph.png\" class=\"img-fluid\" style=\"margin-top: 80px\">\n    </div>\n  </div>\n    \n\n    <app-text-pic-block heading=\"Работает в облаке\"\n                        text=\"It's a dangerous business, Frodo, going out your door. You step onto the road Where the Shadows lie.\"\n                        textAlign=\"left\"\n                        imgLink=\"../assets/default.png\">\n    </app-text-pic-block>\n    <app-text-pic-block heading=\"Не требует входа в аккаунт Instagram\"\n                        text=\"It's a dangerous business, Frodo, going out your door. You step onto the road Where the Shadows lie.\"\n                        textAlign=\"right\"\n                        imgLink=\"../assets/default.png\">\n    </app-text-pic-block>\n    <app-text-pic-block heading=\"Живые аккаунты\"\n                        text=\"It's a dangerous business, Frodo, going out your door. You step onto the road Where the Shadows lie.\"\n                        textAlign=\"left\"\n                        imgLink=\"../assets/default.png\">\n    </app-text-pic-block>\n\n    <app-features heading=\"Преимущества\"\n                  postHeading=\"Home is behind, the world ahead and there are many paths to tread through shadows to the edge, world ahead and there are.\">\n    </app-features>\n      \n    <app-text-block text=\"Currently, Ford sells six sedans and coupes in North America with the Fiesta, Focus, Fusion, C-Max, Mustang and Taurus. This lineup hits.\"\n                    imgLink=\"../assets/ava.png\"\n                    name=\"Emily Jørgensen\"\n                    job=\"Author at Panoply Store\">\n    </app-text-block>\n\n    <app-cta-block  heading=\"Design faster & better\"\n                    text=\"But Brooke Chaffin and Catherine Connors are looking to change that with the introduction of Maveric\"\n                    btnText=\"Get started\">\n    </app-cta-block>\n  </div>\n"

/***/ }),

/***/ "./src/app/pages/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/pages/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/pages/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/pages/prices/prices.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/prices/prices.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaWNlcy9wcmljZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/prices/prices.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/prices/prices.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-pricing  heading=\"Тарифы\"\n                postHeading=\"Выберите наиболее подходящий для вас тариф\">\n  </app-pricing>\n\n  <app-text-block text=\"Currently, Ford sells six sedans and coupes in North America with the Fiesta, Focus, Fusion, C-Max, Mustang and Taurus. This lineup hits.\"\n                    imgLink=\"../assets/ava.png\"\n                    name=\"Emily Jørgensen\"\n                    job=\"Author at Panoply Store\">\n  </app-text-block>\n  <app-qa-section heading=\"Вопрос-ответ\"\n                  postHeading=\"Список самых часто задаваемых вопросов\">\n  </app-qa-section>\n  <app-cta-block  heading=\"Начать работу\"\n                  text=\"But Brooke Chaffin and Catherine Connors are looking to change that with the introduction of Maveric\"\n                  btnText=\"Get started\">\n  </app-cta-block>\n</div>"

/***/ }),

/***/ "./src/app/pages/prices/prices.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/prices/prices.component.ts ***!
  \**************************************************/
/*! exports provided: PricesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricesComponent", function() { return PricesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PricesComponent = /** @class */ (function () {
    function PricesComponent() {
    }
    PricesComponent.prototype.ngOnInit = function () {
    };
    PricesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prices',
            template: __webpack_require__(/*! ./prices.component.html */ "./src/app/pages/prices/prices.component.html"),
            styles: [__webpack_require__(/*! ./prices.component.css */ "./src/app/pages/prices/prices.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PricesComponent);
    return PricesComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Федор\live-comments\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map