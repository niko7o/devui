webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mover {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    width: 200px;\n    max-height: 100vh;\n    background-color: #274651;\n    z-index: -1;\n    transform:  rotate(44deg) scale(3) skew(7deg) translate(0px);\n    -webkit-transform:  rotate(44deg) scale(3) skew(7deg) translate(0px);\n    -moz-transform: rotate(44deg) scale(3) skew(7deg) translate(0px);\n    -o-transform:  rotate(44deg) scale(3) skew(7deg) translate(0px);\n    -ms-transform:  rotate(44deg) scale(3) skew(7deg) translate(0px);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n<div id=\"bg\" class=\"mover\"></div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'U&I';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__template_list_template_list_component__ = __webpack_require__("../../../../../src/app/template-list/template-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__template_detail_template_detail_component__ = __webpack_require__("../../../../../src/app/template-detail/template-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__inbox_inbox_component__ = __webpack_require__("../../../../../src/app/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_template_service__ = __webpack_require__("../../../../../src/app/services/template.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__template_create_template_create_component__ = __webpack_require__("../../../../../src/app/template-create/template-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__favorites_favorites_component__ = __webpack_require__("../../../../../src/app/favorites/favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__template_list_template_list_component__["a" /* TemplateListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_10__template_detail_template_detail_component__["a" /* TemplateDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_14__inbox_inbox_component__["a" /* InboxComponent */],
                __WEBPACK_IMPORTED_MODULE_17__template_create_template_create_component__["a" /* TemplateCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_18__favorites_favorites_component__["a" /* FavoritesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_19_angular2_image_upload__["a" /* ImageUploadModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__services_template_service__["a" /* TemplateService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".templates {\n    margin-top: 50px;\n    width: auto;\n    white-space: nowrap;\n    overflow-x: auto;\n    overflow-y: hidden;\n    height: 430px;\n    margin-bottom: -17px;\n}\n\n.templates p {\n    white-space: pre-wrap;\n}\n\n.list {\n    position: relative;\n    height: 430px;\n    display: inline-block;\n    padding-right: 2em;\n}\n\n.template {\n    display: block;\n    float: left;\n    width: 300px;\n    height: 300px;\n    background-color: white;\n    color: black;\n    margin: 20px 7px 20px 0;\n    box-sizing: border-box;\n    padding: 20px;\n}\n\n.template h3 {\n    font-family: 'Raleway';\n    text-transform: uppercase;\n    color: #13b34b\n}\n\n.small {\n    font-size: 10px;\n    font-weight: lighter;\n}\n\n.rate {\n    width: 16px;\n    background-color: #d63e71;\n    padding: 10px;\n    border-radius: 18px;\n    vertical-align: middle;\n}\n\n.text {\n    height: 200px;\n}\n\n.votes {\n    text-align: right;\n}\n\nsvg {\n    margin-top: 20px;\n    margin-right: 25px;\n}\n\n.active-heart {\n    fill: white;\n}\n\n.active-heart:hover {\n    cursor: pointer;\n    fill:#F05228;\n}\n\n/* Buttons */\n\nbutton {\n    position: absolute;\n    bottom: 63px;\n    left: 0px;\n    padding: 11px 30px;\n    background-color: #2DDD6D;\n    border: none;\n    text-transform: uppercase;\n    font-size: 10px;\n    letter-spacing: 1px;\n    width: 130px;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: #3F35FC;\n    color: white;   \n}\n\n#details {\n    background-color: white; \n    color: black;\n}\n\n#details:hover {\n    background-color: #F05228;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"templates\">\n  <!-- ng-show=\"this.auth.user.favorites | contains: this.templates._id\" -->\n  <div class=\"list\" *ngFor=\"let t of templates\">\n    <div class=\"template\" *ngIf=\"this.auth.user.favorites.indexOf(t._id) !== -1\">\n      <div class=\"text\">\n        <h3> {{ t.title }} </h3>\n        <p> {{ t.description }} </p>\n        <p class=\"small\" style=\"color: gray\"> ID: {{ t._id }} </p>\n        <p class=\"small\"> User: {{ t.creator.username }} </p>\n      </div>\n      <div class=\"votes\"> \n        <img class=\"rate\" src=\"assets/images/rate.png\"/> <span>{{ t.votes }}</span>\n      </div>\n\n      <a [routerLink]=\"['../templates', t._id]\">\n          <button id=\"details\">Details</button>\n      </a>\n      \n      <a (click)=\"removeFavorite(t._id, this.auth.user._id)\">\n        <button id=\"remove\" style=\"right: 67px !important; left: unset !important;\">Remove</button>\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_template_service__ = __webpack_require__("../../../../../src/app/services/template.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoritesComponent = (function () {
    function FavoritesComponent(tempServ, auth, router) {
        var _this = this;
        this.tempServ = tempServ;
        this.auth = auth;
        this.router = router;
        this.templates = [];
        this.tempServ.getTemplateList().subscribe(function (list) {
            _this.templates = list;
        });
    }
    FavoritesComponent.prototype.addFavorite = function (templateid, currentuser) {
        this.tempServ.addfavorite(templateid, currentuser).subscribe();
        setTimeout(function () { location.reload(); }, 10);
    };
    FavoritesComponent.prototype.removeFavorite = function (templateid, currentuser) {
        this.tempServ.removefavorite(templateid, currentuser).subscribe();
        setTimeout(function () { location.reload(); }, 10);
    };
    FavoritesComponent.prototype.ngOnInit = function () {
    };
    FavoritesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__("../../../../../src/app/favorites/favorites.component.html"),
            styles: [__webpack_require__("../../../../../src/app/favorites/favorites.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_template_service__["a" /* TemplateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow-y: hidden;\n}\n\n.right {\n    position: relative;\n    float: right;\n    width: 50%;\n    text-align: center;\n}\n\n.right button {\n    vertical-align: middle;    \n}\n\n.center {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.underline {\n    border-bottom: 1px solid #2DDD6D;\n}\n\n.lime-bg {\n    background-color: #2DDD6D;\n}\n\nh1 {\n    text-transform: uppercase;\n    font-size: 120px;\n    line-height: 105px;\n    font-family: 'Raleway', sans-serif;\n}\n\n.btns {\n    position: absolute;\n    top: 114px;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    height: 40px;\n    width: 100%;\n    margin: auto;\n}\n\nbutton {\n    text-transform: uppercase;\n    font-size: 10px;\n    margin: 0em 1.2em;\n    width: 120px;\n    height: 40px;\n    border-radius: 50px;\n    letter-spacing: 1px;\n    background-color: white;\n    border: none;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: #3F35FC;\n    color: white;\n}\n\n.pink:hover {\n    cursor: pointer;\n    background-color: #fc3581 !important;\n    color: white;\n}\n\n.mini {\n    display: block;\n    font-size: 11px;\n    line-height: 20px;\n    letter-spacing: 0.7px;\n}\n\n.featured {\n    color: #2DDD6D;\n    margin-right: 17px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n  <div class=\"float\">\n    <div *ngIf=\"!auth.user\" class=\"message\">\n      <h1>What <br>\n      <span class=\"featured\">are</span><span>you?</span>\n      </h1>\n    </div>\n\n    <div *ngIf=\"auth.user\" class=\"message\">\n        <h1>Welcome <br>\n          <span class=\"lime\">{{ auth.user.username }}</span>.\n        </h1>\n    </div>\n\n    <span class=\"mini\">\n      create an account<br>\n      with your <span class=\"underline\">role</span> or <span class=\"underline\">browse</span><br>\n      devui is an open community with <br>\n      free [templates] to use in your projects\n    </span>\n  </div>\n\n  <div class=\"right\">\n    <div class=\"btns\">\n      <button *ngIf=\"auth.user\" [routerLink]=\"['templates']\" class=\"pink\">Templates</button>\n      <button *ngIf=\"auth.user\" [routerLink]=\"['templates/new']\" class=\"lime-bg\">Create</button>\n      <button *ngIf=\"!auth.user\" [routerLink]=\"['signup']\" class=\"lime-bg\">Developer</button>\n      <button *ngIf=\"!auth.user\" [routerLink]=\"['signup']\" class=\"pink\">UI Designer</button>\n    </div>\n  </div>\n\n</div>\n\n<!--\n<div ng-controller=\"mover\">\n  <img id=\"bg\" class=\"movingImage\" src=\"https://i.pinimg.com/originals/69/34/23/693423670038b856b3e778e6e1955f0a.png\" />\n</div>\n-->\n\n<!-- \n  <script>\n    var app = angular.module(\"app\", []);\n    app.controller('mover', ['$scope', function ($scope) {\n        $scope.mouseDown = function (event) {\n            $scope.X = event.clientX;\n            $scope.Y = event.clientY;\n        };\n    }]);\n</script> \n-->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent.prototype.passRole = function (role) {
        return role;
    };
    HomeComponent.prototype.ngOnInit = function () {
        console.log(this.auth.user);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/inbox/inbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inbox/inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n-<br>\n<p>You have no new messages.</p>"

/***/ }),

/***/ "../../../../../src/app/inbox/inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InboxComponent = (function () {
    function InboxComponent() {
    }
    InboxComponent.prototype.ngOnInit = function () {
    };
    InboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inbox',
            template: __webpack_require__("../../../../../src/app/inbox/inbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/inbox/inbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n    text-align: center;\n    width: 400px;\n    height: 200px;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    position: absolute;\n}\n\nform input {\n    padding: 10px 20px;\n    margin: 10px;\n}\n\nbutton {\n    padding: 13px 30px;\n    background-color: #2DDD6D;\n    border: none;\n    text-transform: uppercase;\n    font-size: 10px;\n    letter-spacing: 1px;\n    margin-top: 10px;\n    width: 167px;\n}\n\nbutton:focus{\n    outline: #2DDD6D;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: #3F35FC;\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!auth.user\">\n  <form>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"username\" autofocus/>\n    <br>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"password\"/><br>\n    <button (click)=\"login(username,password)\"> login </button>\n  </form>\n  <!-- <p class=\"error\"> {{ error.message }} </p> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.login = function (username, password) {
        this.auth.login(username, password).subscribe();
        this.router.navigate(['/']);
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n    width: 100%;\n    height: 50px;\n    position: relative;\n}\n\nnav ul {\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n\nnav ul li {\n    list-style: none;\n    margin-left: 3em;\n    font-size: 13px;\n    text-transform: lowercase;\n    display: inline-block;\n    letter-spacing: 1px;\n}\n\na {\n    text-decoration: none;\n    color: white;\n}\n\na:hover {\n    color: #2DDD6D\n}\n\n.clickable:hover {\n    cursor: pointer;\n}\n\n.logo {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.slogan {\n    font-size: 10px;\n}\n\n.favs {\n    display: inline-block;\n    text-align: center;\n    width: 20px;\n    height: 20px;\n    min-width: 20px;\n    background-color: rgb(248, 66, 100);\n    border-radius: 999px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"logo\">\n    <img id=\"logo\" src=\"assets/images/logo.png\" alt=\"U&I\"><br>\n    <span class=\"slogan\">develop: together</span>\n  </div>\n  <ul>\n    <li><a [routerLink]=\"['/']\">Home</a></li>\n    <li><a [routerLink]=\"['templates']\">Templates</a></li>\n    <li *ngIf=\"!auth.user\"><a [routerLink]=\"['signup']\">Sign up</a></li>\n    <li *ngIf=\"!auth.user\"><a [routerLink]=\"['login']\">Login</a></li>\n    <li *ngIf=\"auth.user\"><a [routerLink]=\"['templates/new']\">Create</a></li>\n    <li *ngIf=\"auth.user && auth.user.favorites.length > 0\"><a [routerLink]=\"['favorites']\">Favorites</a> <span class=\"favs\"> {{ auth.user.favorites.length }}</span></li>\n    <!-- <li *ngIf=\"auth.user\"><a [routerLink]=\"['inbox']\">Inbox</a></li> -->\n    <li *ngIf=\"auth.user\"><a class=\"clickable\" (click)=\"logout()\">Logout {{ auth.user.username }}</a></li>\n  </ul>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = (function () {
    function NavComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.logout = function () {
        this.auth.logout().subscribe();
        this.router.navigate(['/']);
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hidden {\n    display: block;\n    height: 0px;\n}\n\n.lime { color: #2DDD6D }\n\nbutton {\n    padding: 13px 30px;\n    background-color: #2DDD6D;\n    border: none;\n    text-transform: uppercase;\n    font-size: 10px;\n    letter-spacing: 1px;\n    margin-top: 10px;\n    width: 167px;\n    margin-bottom: 20px;\n}\n\nbutton:focus{\n    outline: #2DDD6D;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: #3F35FC;\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"lime\" style=\"margin-top:2em\">-</div>\n\n<p>{{ auth.user.username }}, your profile works!</p>\n<p>Role: <b class=\"lime\">{{ auth.user.role }}</b></p>\n<p>Your ID: <b class=\"lime\">{{ auth.user._id }}</b></p>\n\n<div class=\"inbox\"></div>\n\n<div class=\"opinions\">\n    People's opinions on you:\n    <ul>\n        <li *ngFor=\"let opinion of auth.user.opinions\">{{ opinion }}</li>\n    </ul>\n</div>\n\n<button id=\"opi\" onlick=\"show()\">Leave Opinion</button>\n\n<div class=\"hidden\">\n    <textarea rows=\"6\" cols=\"20\" placeholder=\"Write your opinion..\"></textarea>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        console.log(this.auth.user);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_list_template_list_component__ = __webpack_require__("../../../../../src/app/template-list/template-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template_detail_template_detail_component__ = __webpack_require__("../../../../../src/app/template-detail/template-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__template_create_template_create_component__ = __webpack_require__("../../../../../src/app/template-create/template-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__favorites_favorites_component__ = __webpack_require__("../../../../../src/app/favorites/favorites.component.ts");








// import { InboxComponent } from './inbox/inbox.component';
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'favorites', component: __WEBPACK_IMPORTED_MODULE_7__favorites_favorites_component__["a" /* FavoritesComponent */] },
    { path: 'templates', component: __WEBPACK_IMPORTED_MODULE_1__template_list_template_list_component__["a" /* TemplateListComponent */] },
    { path: 'templates/new', component: __WEBPACK_IMPORTED_MODULE_6__template_create_template_create_component__["a" /* TemplateCreateComponent */] },
    { path: 'templates/:id', component: __WEBPACK_IMPORTED_MODULE_4__template_detail_template_detail_component__["a" /* TemplateDetailComponent */] },
    { path: 'templates/:id/addfavorite', component: __WEBPACK_IMPORTED_MODULE_1__template_list_template_list_component__["a" /* TemplateListComponent */] },
    { path: 'templates/:id/removefavorite', component: __WEBPACK_IMPORTED_MODULE_1__template_list_template_list_component__["a" /* TemplateListComponent */] },
    { path: 'templates/:id/rateup', component: __WEBPACK_IMPORTED_MODULE_4__template_detail_template_detail_component__["a" /* TemplateDetailComponent */] },
    { path: 'templates/:id/ratedown', component: __WEBPACK_IMPORTED_MODULE_4__template_detail_template_detail_component__["a" /* TemplateDetailComponent */] },
    { path: 'templates/:id/devadd', component: __WEBPACK_IMPORTED_MODULE_4__template_detail_template_detail_component__["a" /* TemplateDetailComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */] },
    { path: '**', redirectTo: '' }
    // { path: 'inbox', component: InboxComponent },
];


/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BASE_DOMAIN = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseurl;
var BASE_URL = BASE_DOMAIN + "/api/auth";
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.options = {
            withCredentials: true
        };
        this.loginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isLoggedIn().subscribe();
    }
    AuthService.prototype.handleError = function (e) {
        var error_message = e.json().message;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].throw(e.json().message);
    };
    AuthService.prototype.handleUser = function (obj) {
        this.user = obj;
        this.loginEvent.emit(this.user);
        return this.user;
    };
    AuthService.prototype.signup = function (username, password, email, role) {
        var _this = this;
        return this.http.post(BASE_URL + "/signup", { username: username, password: password, email: email, role: role }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.handleUser(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        console.log("Login with user: [" + username + "] and password [" + password + "]");
        return this.http.post(BASE_URL + "/login", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.handleUser(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        console.log('logging out: ' + this.user);
        return this.http.get(BASE_URL + "/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.handleUser(null); })
            .catch(this.handleError);
    };
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(BASE_URL + "/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.handleUser(user); })
            .catch(this.handleError);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/template.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DOMAIN = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseurl;
var PATH = '/api/templates';
var BASEURL = "" + DOMAIN + PATH;
var TemplateService = (function () {
    function TemplateService(http) {
        this.http = http;
        this.options = {
            withCredentials: true
        };
        this.loginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TemplateService.prototype.handleError = function (e) {
        var error_message = e.json().message;
        console.error(error_message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(e.json().message);
    };
    TemplateService.prototype.handleUser = function (obj) {
        this.user = obj;
        this.loginEvent.emit(this.user);
        return this.user;
    };
    /* Creating New Template */
    TemplateService.prototype.create = function (title, description, creator) {
        var _this = this;
        return this.http.post(BASEURL + "/new", { title: title, description: description, creator: creator }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.handleUser(user); })
            .catch(this.handleError);
    };
    /* Favoriting */
    TemplateService.prototype.addfavorite = function (templateID, currentuser) {
        var _this = this;
        console.log('favoriting template: ' + templateID + ' for user ' + currentuser);
        return this.http.post(BASEURL + "/" + templateID + "/addfavorite", {}, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.handleUser(user); })
            .catch(this.handleError);
    };
    TemplateService.prototype.removefavorite = function (templateID, currentuser) {
        var _this = this;
        console.log('removing template: ' + templateID + ' for user ' + currentuser);
        return this.http.post(BASEURL + "/" + templateID + "/removefavorite", {}, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.handleUser(user); })
            .catch(this.handleError);
    };
    /* Add or remove developers to specific template */
    TemplateService.prototype.devadd = function (templateID, currentuser) {
        var _this = this;
        console.log('adding template: ' + templateID + ' for dev ' + currentuser);
        return this.http.post(BASEURL + "/" + templateID + "/devadd", {}, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.handleUser(user); })
            .catch(this.handleError);
    };
    TemplateService.prototype.devrem = function (templateID, currentuser) {
        var _this = this;
        console.log('removing template: ' + templateID + ' for dev ' + currentuser);
        return this.http.post(BASEURL + "/" + templateID + "/devadd", {}, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.handleUser(user); })
            .catch(this.handleError);
    };
    /* Template */
    TemplateService.prototype.getTemplateList = function () {
        return this.http.get(BASEURL).map(function (res) { return res.json(); });
    };
    TemplateService.prototype.getTemplateByID = function (id) {
        return this.http.get(BASEURL + "/" + id).map(function (res) { return res.json(); });
    };
    TemplateService.prototype.deleteTemplate = function (id) {
        return this.http.delete(BASEURL + "/" + id).map(function (res) { return res.json(); });
    };
    /* Rating up and down */
    TemplateService.prototype.rateup = function (id) {
        return this.http.get(BASEURL + "/" + id + "/rateup").map(function (res) { return res.json(); });
    };
    TemplateService.prototype.ratedown = function (id) {
        return this.http.get(BASEURL + "/" + id + "/ratedown").map(function (res) { return res.json(); });
    };
    TemplateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], TemplateService);
    return TemplateService;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n    text-align: center;\n    width: 400px;\n    height: 200px;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    position: absolute;\n}\n\nform input {\n    padding: 10px 20px;\n    margin: 10px;\n}\n\nbutton {\n    padding: 13px 30px;\n    background-color: #2DDD6D;\n    border: none;\n    text-transform: uppercase;\n    font-size: 10px;\n    letter-spacing: 1px;\n    margin-top: 10px;\n    width: 167px;\n}\n\nbutton:focus{\n    outline: #2DDD6D;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: #3F35FC;\n    color: white;\n}\n\n/* Dropdown */\n.ui-drop {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    margin: 10px;\n}\n  \n.ui-drop select {\n    background-color: #e0b438;\n    color: black;\n    font-size: 13px;\n    padding: .7em;\n    padding-right: 2.5em;\n    border: 0;\n    margin: 0;\n    border-radius: 4px;\n    text-indent: 0.01px;\n    text-overflow: '';\n    text-align: center;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    min-width: 200px;\n}\n\n.ui-drop select::-ms-expand {\n    display: none;\n}\n\n.ui-drop::before, .ui-drop::after {\n    content: \"\";\n    position: absolute;\n    pointer-events: none;\n}\n\n.ui-drop::after { /*  Custom dropdown arrow */\n    content: \"\\25BC\";\n    height: 1em;\n    font-size: .625em;\n    line-height: 1;\n    right: 1.2em;\n    top: 50%;\n    margin-top: -.5em;\n}\n\n.ui-drop::before { /*  Custom dropdown arrow cover */\n    width: 2em;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 0 3px 3px 0;\n    background-color: rgba(0,0,0,.2);\n}\n\n.ui-drop::after {\n    color: rgba(0,0,0,.6);\n}\n\n.ui-drop select[disabled] {\n    color: rgba(0,0,0,.25);\n}\n\n.error {\n    font-size: 10px;\n    color: #e0b438;\n}\n\nbutton:disabled {\n    opacity: 0.7;\n    background-color: #323131;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<form id=\"signupform\" #myForm=\"ngForm\" novalidate>      \n  <input placeholder=\"username\" type=\"text\" [(ngModel)]=\"username\" #myUsername=\"ngModel\" name=\"username\" maxlength=\"12\" required/><br>\n  <div *ngIf=\"myUsername.length === 12 && (myUsername.dirty || myUsername.touched)\">\n      <p class=\"error\" [hidden]=\"!myUsername.errors\">\n        Sorry! The maximum username length is 12.\n      </p>\n  </div>\n\n  <input placeholder=\"password\" type=\"password\" [(ngModel)]=\"password\" #myPassword=\"ngModel\" name=\"password\" required/><br>\n  <div *ngIf=\"myPassword.errors && (myPassword.dirty || myPassword.touched)\">\n      <p class=\"error\" [hidden]=\"!myPassword.errors.required\">\n        Password is required\n      </p>\n  </div>\n\n  <span class=\"ui-drop\">\n      <select [(ngModel)]=\"role\" #myRole=\"ngModel\" name=\"role\" required>\n        <option value=\"developer\">Developer</option>\n        <option value=\"ui\">UI Designer</option>\n      </select>\n    </span>\n    <div *ngIf=\"myRole.errors && (myRole.dirty || myRole.touched)\">\n        <p class=\"error\" [hidden]=\"!myRole.errors.required\">\n          Role is required\n        </p>\n    </div>\n  \n  <input placeholder=\"email\" type=\"email\" [(ngModel)]=\"email\" #myEmail=\"ngModel\" name=\"email\" required/><br>\n  <div *ngIf=\"myEmail.errors && (myEmail.dirty || myEmail.touched)\">\n      <p class=\"error\" [hidden]=\"!myEmail.errors.required\">\n        Email is required\n      </p>\n  </div>\n\n  <br>\n  <button [disabled]=\"myPassword.errors || myUsername.errors || myRole.errors || myEmail.errors\" (click)=\"signup(username,password,email,role)\">Create Account</button>\n  <p *ngIf=\"error\" class=\"error\"> {{ error.message }} </p>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    SignupComponent.prototype.signup = function (username, password, email, role) {
        this.auth.signup(username, password, email, role).subscribe();
        this.router.navigate(['/']);
    };
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/template-create/template-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n    width: 400px;\n    height: 200px;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    position: absolute;\n}\n\nform input {\n    padding: 10px 20px;\n    margin: 10px 0px;\n}\n\n.desc {\n    padding: 20px;\n    font-family: sans-serif;\n    font-size: 11px;\n}\n\nbutton {\n    padding: 13px 30px;\n    background-color: #2DDD6D;\n    border: none;\n    text-transform: uppercase;\n    font-size: 10px;\n    letter-spacing: 1px;\n    margin-top: 10px;\n    width: 167px;\n    transition: 0.55s background-color linear;\n}\n\nbutton:focus{\n    outline: #2DDD6D;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: #3F35FC;\n    color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/template-create/template-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"auth.user\" class=\"wrap\">\n    <form id=\"createform\">\n      <input placeholder=\"Enter a project title\" type=\"text\" [(ngModel)]=\"title\" name=\"title\" required/><br>\n      <textarea class=\"desc\" [(ngModel)]=\"description\" name=\"description\" rows=\"10\" cols=\"40\" placeholder=\"Write a description..\" ></textarea>      \n      <image-upload\n          [max]=\"3\"\n          [url]=\"'http://localhost:3000/api/templates/uploadPhoto'\"\n          [buttonCaption]=\"'Upload Wireframes'\"\n          [dropBoxMessage]=\"'Or drop your images here!'\"\n          [extensions]=\"['jpg','png','gif']\"\n          [class]=\"'uploader'\"      \n          (removed)=\"onRemoved($event)\"\n          (uploadFinished)=\"onUploadFinished($event)\">\n      </image-upload>\n      <button (click)=\"create(title, description, this.auth.user._id)\">Create Template</button>\n    </form>\n</div>\n\n<img src=\"http://localhost:3000/images/uploads/one\">\n<img src=\"http://localhost:3000/images/uploads/two\">\n"

/***/ }),

/***/ "../../../../../src/app/template-create/template-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_template_service__ = __webpack_require__("../../../../../src/app/services/template.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TemplateCreateComponent = (function () {
    function TemplateCreateComponent(template, router, auth) {
        this.template = template;
        this.router = router;
        this.auth = auth;
        this.photo = [];
    }
    TemplateCreateComponent.prototype.ngOnInit = function () { };
    TemplateCreateComponent.prototype.create = function (title, description, creator) {
        this.template.create(title, description, creator).subscribe();
        this.router.navigate(['/templates']);
    };
    TemplateCreateComponent.prototype.onUploadFinished = function (e) {
        this.photo[e.file.name] = e.serverResponse._body.slice(1, -1);
        console.log(e);
        console.log(this.photo);
    };
    TemplateCreateComponent.prototype.onRemoved = function (e) {
        delete this.photo[e.file.name];
        console.log(this.photo);
    };
    TemplateCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-template-create',
            template: __webpack_require__("../../../../../src/app/template-create/template-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/template-create/template-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_template_service__["a" /* TemplateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], TemplateCreateComponent);
    return TemplateCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/template-detail/template-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n    font-family: 'Raleway';\n    text-transform: uppercase;\n    padding:10px 0;\n    letter-spacing: 1px;\n}\n\na {\n    color: white;\n}\n\n.votes {\n    font-size: 14px;\n    padding: 13px 12px;\n    display: inline-block;\n    background-color: #5d5a5b;\n    text-align: center;\n    border-radius: 50%;\n    font-family: sans-serif;\n    margin: 0px 0px;\n}\n\n.reverse {\n    transform: rotate(180deg); \n    -ms-transform: rotate(180deg); \n    -moz-transform: rotate(180deg);\n    -webkit-transform: rotate(180deg);\n}\n\n.rate {\n    padding: 10px;\n    width: 50px;\n}\n\n.rate img {\n    width: 16px;\n}\n\n.right, .left {\n    float: left;\n}\n\n.left img {\n    margin-bottom: 1em;\n    vertical-align: middle;\n}\n\n.description {\n    font-size: 10px;\n    max-width: 614px;\n    text-align: justify;\n    line-height: 18px;\n}\n\n.purple {\n    color: #2DDD6D;\n    text-transform: lowercase;\n    font-size: 11px;\n}\n\n.user img{\n    margin-right: 5px;\n    vertical-align: middle;\n}\n\n.wrapper {\n    overflow-y: scroll !important;\n}\n\n.code {\n    margin-top: 20px;\n    margin-left: 20px;\n    width: 250px;\n    height: 100px;\n    background-color: white;\n}\n\n.left, .middle, .right {\n    float: left;\n}\n\n.title ul {\n    display: inline-block;\n    -webkit-margin-before: 0em;\n    -webkit-margin-after: 0em;\n    -webkit-margin-start: 0px;\n    -webkit-margin-end: 0px;\n    -webkit-padding-start: 0px;\n}\n\n.title ul li {\n    font-size: 10px;\n    font-family: 'Lora';\n    display: inline-block;\n    color: #2ddd6d;\n    text-transform: lowercase;\n    margin-right: 20px;\n}\n\n.develop {\n    background-color: royalblue;\n    color: white;\n}\n\n.message {\n    background-color: #d63e71;\n    color: white;\n}\n\nbutton {\n    padding: 10px 29px;\n    width: 150px;\n    background-color: #2DDD6D;\n    border: none;\n    text-transform: uppercase;\n    font-size: 10px;\n    letter-spacing: 1px;\n    margin:20px 0 0 0;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: #3b3b3b;\n    color: white;\n}\n\nbutton:disabled {\n    background-color:#b2c972;\n}\n\n.creation {\n    background-color: #274651;\n    display: inline-block;\n    font-size: 12px;\n    padding: 3px 8px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/template-detail/template-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div *ngIf=\"template\">\n    <br>\n\n    <div class=\"info\">\n        <div class=\"title\"> {{ template.title }} \n          - <span class=\"purple user\">{{ template.creator.username }}</span>\n          - developers <img src=\"assets/images/user.svg\" width=\"16\"> <span class=\"devcount\">{{ template.developers.length }}</span>\n          <ul>\n            <li *ngFor=\"let dev of template.developers; index as i\">{{ dev.username }}</li>\n          </ul>\n        </div>\n\n        <div class=\"creation\"> {{ template.created | date:\"dd/MM/yy\" }} </div>\n        <div class=\"description\"> {{ template.description }} Lorem fistrum jarl mamaar torpedo benemeritaar diodenoo llevame al sircoo la caidita de la pradera. A wan la caidita ese que llega apetecan fistro diodeno a gramenawer. Me cago en tus muelas te voy a borrar el cerito por la gloria de mi madre diodeno. Condemor la caidita a gramenawer condemor fistro papaar papaar ese que llega apetecan la caidita. Sexuarl quietooor ese hombree hasta luego Lucas. </div>\n    </div>\n\n    <!-- <div class=\"left\">\n      <div class=\"wireframes\"> \n        {{ template.images }}<br>\n        <img src=\"assets/images/614x345.png\" /><br>\n        <img src=\"assets/images/614x345.png\" /><br>\n        <img src=\"assets/images/614x345.png\" /><br>\n      </div>\n    </div> -->\n    \n    <div class=\"middle\">\n        <button class=\"btn develop\" (click)=\"devadd(template._id, this.auth.user._id)\">Develop</button><br>\n        \n        <button class=\"btn message\">Message</button><br>\n        \n        <button id=\"rateup\" [disabled]=\"isVotedUp\" (click)=\"isVotedUp = true; isVotedDown = false\" class=\"btn rate\" ng-model=\"voted\" (click)=\"rateup(template._id);\">\n          <img src=\"assets/images/rate.png\"/>\n        </button>\n        <span id=\"votes\" class=\"votes\"> {{ template.votes }} </span>\n        <button id=\"ratedown\" [disabled]=\"isVotedDown\" (click)=\"isVotedDown = true; isVotedUp = false\" class=\"btn rate\" ng-model=\"voted\" (click)=\"ratedown(template._id);\">\n          <img class=\"reverse\" src=\"assets/images/rate.png\"/>\n        </button><br>\n  \n        <button class=\"delete\" *ngIf=\"template.creator.username == this.auth.user.username\" (click)=\"deleteTemplate(template._id)\"> Delete </button><br>\n        <a [routerLink]=\"['../']\"> <button class=\"btn\">Back to list</button></a>\n    </div>\n\n    <div class=\"right\">\n      <div class=\"updates\" *ngFor=\"let update of template.updates\">\n        <span>{{ update }}</span><br>\n      </div>\n\n      <div class=\"code\">\n        <div class=\"html\"></div>\n        <div class=\"css\"></div>\n        <div class=\"js\"></div>\n      </div>\n    </div>\n\n    <div id=\"message-modal\" hidden>\n        <textarea placeholder=\"Write a message..\" cols=\"10\" rows=\"30\"></textarea>\n        <button>Send</button>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/template-detail/template-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_template_service__ = __webpack_require__("../../../../../src/app/services/template.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TemplateDetailComponent = (function () {
    function TemplateDetailComponent(router, tempServ, auth, route) {
        var _this = this;
        this.router = router;
        this.tempServ = tempServ;
        this.auth = auth;
        this.route = route;
        this.votedUp = 0;
        this.votedDown = 0;
        route.params.subscribe(function (params) {
            _this.tempServ.getTemplateByID(params['id']).subscribe(function (template) { return _this.template = template; });
        });
    }
    TemplateDetailComponent.prototype.ngOnInit = function () { };
    TemplateDetailComponent.prototype.deleteTemplate = function (id) {
        var _this = this;
        this.tempServ.deleteTemplate(id).subscribe(function () {
            _this.router.navigate(['templates']);
        });
    };
    TemplateDetailComponent.prototype.rateup = function (id) {
        var _this = this;
        this.template.votes++;
        this.tempServ.rateup(id).subscribe(function (template) { return _this.template = template; });
        this.votedUp = 1;
        this.votedDown = 0;
    };
    TemplateDetailComponent.prototype.ratedown = function (id) {
        var _this = this;
        this.template.votes--;
        this.tempServ.ratedown(id).subscribe(function (template) { return _this.template = template; });
        this.votedDown = 1;
        this.votedUp = 0;
    };
    TemplateDetailComponent.prototype.devadd = function (templateID, userID) {
        var _this = this;
        this.tempServ.devadd(templateID, userID).subscribe(function (template) { return _this.template = template; });
        // this.template.developers.push(this.user);
        setTimeout(function () {
            location.reload();
        }, 50);
    };
    TemplateDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-template-detail',
            template: __webpack_require__("../../../../../src/app/template-detail/template-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/template-detail/template-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_template_service__["a" /* TemplateService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], TemplateDetailComponent);
    return TemplateDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/template-list/template-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".templates {\n    margin-top: 50px;\n    width: auto;\n    white-space: nowrap;\n    overflow-x: auto;\n    overflow-y: hidden;\n    height: 430px;\n    margin-bottom: -17px;\n}\n\n.templates p {\n    white-space: pre-wrap;\n}\n\n.list {\n    position: relative;\n    height: 430px;\n    display: inline-block;\n}\n\n.template {\n    display: block;\n    float: left;\n    width: 300px;\n    height: 300px;\n    background-color: white;\n    color: black;\n    margin: 20px 40px 20px 0;\n    box-sizing: border-box;\n    padding: 20px;\n}\n\n.template h3 {\n    font-family: 'Raleway';\n    text-transform: uppercase;\n    color: #13b34b\n}\n\nbutton {\n    position: absolute;\n    bottom: 63px;\n    left: 0px;\n    padding: 11px 30px;\n    background-color: #2DDD6D;\n    border: none;\n    text-transform: uppercase;\n    font-size: 10px;\n    letter-spacing: 1px;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: #3F35FC;\n    color: white;   \n}\n\n.small {\n    font-size: 10px;\n    font-weight: lighter;\n}\n\n.rate {\n    width: 16px;\n    background-color: #d63e71;\n    padding: 10px;\n    border-radius: 18px;\n    vertical-align: middle;\n}\n\n.text {\n    height: 200px;\n}\n\n.votes {\n    text-align: right;\n}\n\nsvg {\n    margin-top: 20px;\n    margin-left: -33px;\n}\n\n.active-heart {\n    fill: white;\n}\n\n.active-heart:hover {\n    cursor: pointer;\n    fill:#F05228;\n}\n\n.no-heart {\n    fill:#F05228;\n}\n\n.no-heart:hover {\n    cursor: pointer;\n    fill: white;\n}\n\n.author {\n    background-color: royalblue;\n    padding: 10px 15px 10px 10px;\n    vertical-align: middle;\n    position: absolute;\n    top: 250px;\n    border-radius: 20px;\n    color: white;\n    font-family: Raleway;\n    letter-spacing: 0.5px;\n    text-transform: uppercase;\n}\n\n.author img {\n    vertical-align: middle;\n    margin-right: 3px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/template-list/template-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"templates\">\n  <div class=\"list\" *ngFor=\"let temp of templates\">\n\n    <div class=\"template\">\n      <div class=\"text\">\n        <h3> {{ temp.title }} </h3>\n        <p> {{ temp.description }} </p>\n        <p class=\"small\" style=\"color: gray\"> ID: {{ temp._id }} </p>\n        <p class=\"small author\"> <img width=\"16\" src=\"assets/images/user.svg\" />{{ temp.creator.username }} </p>\n      </div>\n      <div class=\"votes\"> \n        <img class=\"rate\" src=\"assets/images/rate.png\"/> <span>{{ temp.votes }}</span>\n      </div>\n      <a [routerLink]=\"[temp._id]\">\n        <button >Details</button>\n      </a>\n    </div>\n\n    <div class=\"ratings\" *ngIf=\"auth.user\">\n      <!-- if template is NOT favorited by user -->\n      <a *ngIf=\"this.auth.user.favorites.indexOf(temp._id) == -1\" (click)=\"addFavorite(temp._id, this.auth.user._id)\">\n          <svg width=\"16\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 426.668 426.668\" style=\"enable-background:new 0 0 426.668 426.668;\" xml:space=\"preserve\">\n            <path class=\"active-heart\" d=\"M401.788,74.476c-63.492-82.432-188.446-33.792-188.446,49.92\n            c0-83.712-124.962-132.356-188.463-49.92c-65.63,85.222-0.943,234.509,188.459,320.265\n            C402.731,308.985,467.418,159.698,401.788,74.476z\"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n          </svg>\n      </a>\n\n      <!-- if template is ALREADY favorited by user -->\n      <a *ngIf=\"this.auth.user.favorites.indexOf(temp._id) !== -1\" (click)=\"removeFavorite(temp._id, this.auth.user._id)\">\n        <svg width=\"16\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 426.668 426.668\" style=\"enable-background:new 0 0 426.668 426.668;\" xml:space=\"preserve\">\n          <path class=\"no-heart\" d=\"M401.788,74.476c-63.492-82.432-188.446-33.792-188.446,49.92\n          c0-83.712-124.962-132.356-188.463-49.92c-65.63,85.222-0.943,234.509,188.459,320.265\n          C402.731,308.985,467.418,159.698,401.788,74.476z\"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n        </svg>\n      </a>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/template-list/template-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_template_service__ = __webpack_require__("../../../../../src/app/services/template.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TemplateListComponent = (function () {
    function TemplateListComponent(tempServ, auth) {
        var _this = this;
        this.tempServ = tempServ;
        this.auth = auth;
        this.templates = [];
        this.tempServ.getTemplateList().subscribe(function (list) {
            _this.templates = list;
            console.log(_this.templates);
        });
    }
    TemplateListComponent.prototype.addFavorite = function (templateid, currentuser) {
        this.tempServ.addfavorite(templateid, currentuser).subscribe();
        setTimeout(function () {
            location.reload();
        }, 50);
    };
    TemplateListComponent.prototype.removeFavorite = function (templateid, currentuser) {
        this.tempServ.removefavorite(templateid, currentuser).subscribe();
        setTimeout(function () {
            location.reload();
        }, 50);
    };
    TemplateListComponent.prototype.ngOnInit = function () { };
    TemplateListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-template-list',
            template: __webpack_require__("../../../../../src/app/template-list/template-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/template-list/template-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_template_service__["a" /* TemplateService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], TemplateListComponent);
    return TemplateListComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    baseurl: 'http://localhost:3000',
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map