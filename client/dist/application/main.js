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
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _update_form_update_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update-form/update-form.component */ "./src/app/update-form/update-form.component.ts");
/* harmony import */ var _update_post_update_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-post/update-post.component */ "./src/app/update-post/update-post.component.ts");
/* harmony import */ var _update_student_update_student_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update-student/update-student.component */ "./src/app/update-student/update-student.component.ts");
/* harmony import */ var _update_subject_update_subject_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./update-subject/update-subject.component */ "./src/app/update-subject/update-subject.component.ts");











var routes = [
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
    { path: 'post', component: _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"] },
    { path: 'student', component: _student_student_component__WEBPACK_IMPORTED_MODULE_4__["StudentComponent"] },
    { path: 'subject', component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_6__["SubjectComponent"] },
    { path: 'update/:id', component: _update_form_update_form_component__WEBPACK_IMPORTED_MODULE_7__["UpdateFormComponent"] },
    { path: 'updatePost/:id', component: _update_post_update_post_component__WEBPACK_IMPORTED_MODULE_8__["UpdatePostComponent"] },
    { path: 'updateStudent/:id', component: _update_student_update_student_component__WEBPACK_IMPORTED_MODULE_9__["UpdateStudentComponent"] },
    { path: 'updateSubject/:id', component: _update_subject_update_subject_component__WEBPACK_IMPORTED_MODULE_10__["UpdateSubjectComponent"] }
];
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

module.exports = ".sidebar {\n  margin: 0;\n  padding: 0;\n  width: 200px;\n  background-color: #f1f1f1;\n  position: fixed;\n  height: 100%;\n  overflow: auto;\n}\n\n/* Sidebar links */\n\n.sidebar a {\n  display: block;\n  color: black;\n  padding: 16px;\n  text-decoration: none;\n}\n\n/* Active/current link */\n\n.sidebar a.active {\n  background-color: #4CAF50;\n  color: white;\n}\n\n/* Links on mouse-over */\n\n.sidebar a:hover:not(.active) {\n  background-color: #555;\n  color: white;\n}\n\n/* Page content. The value of the margin-left property should match the value of the sidebar's width property */\n\ndiv.content {\n  margin-left: 200px;\n  padding: 1px 16px;\n  height: 1000px;\n}\n\n/* On screens that are less than 700px wide, make the sidebar into a topbar */\n\n@media screen and (max-width: 700px) {\n  .sidebar {\n    width: 100%;\n    height: auto;\n    position: relative;\n  }\n  .sidebar a {float: left;}\n  div.content {margin-left: 0;}\n}\n\n/* On screens that are less than 400px, display the bar vertically, instead of horizontally */\n\n@media screen and (max-width: 400px) {\n  .sidebar a {\n    text-align: center;\n    float: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBLGtCQUFrQjs7QUFDbEI7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUEsd0JBQXdCOztBQUN4QjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUEsd0JBQXdCOztBQUN4QjtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUEsK0dBQStHOztBQUMvRztFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQSw2RUFBNkU7O0FBQzdFO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtFQUNBLFlBQVksV0FBVyxDQUFDO0VBQ3hCLGFBQWEsY0FBYyxDQUFDO0FBQzlCOztBQUVBLDZGQUE2Rjs7QUFDN0Y7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKiBTaWRlYmFyIGxpbmtzICovXG4uc2lkZWJhciBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBBY3RpdmUvY3VycmVudCBsaW5rICovXG4uc2lkZWJhciBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogTGlua3Mgb24gbW91c2Utb3ZlciAqL1xuLnNpZGViYXIgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFBhZ2UgY29udGVudC4gVGhlIHZhbHVlIG9mIHRoZSBtYXJnaW4tbGVmdCBwcm9wZXJ0eSBzaG91bGQgbWF0Y2ggdGhlIHZhbHVlIG9mIHRoZSBzaWRlYmFyJ3Mgd2lkdGggcHJvcGVydHkgKi9cbmRpdi5jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICBwYWRkaW5nOiAxcHggMTZweDtcbiAgaGVpZ2h0OiAxMDAwcHg7XG59XG5cbi8qIE9uIHNjcmVlbnMgdGhhdCBhcmUgbGVzcyB0aGFuIDcwMHB4IHdpZGUsIG1ha2UgdGhlIHNpZGViYXIgaW50byBhIHRvcGJhciAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLnNpZGViYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnNpZGViYXIgYSB7ZmxvYXQ6IGxlZnQ7fVxuICBkaXYuY29udGVudCB7bWFyZ2luLWxlZnQ6IDA7fVxufVxuXG4vKiBPbiBzY3JlZW5zIHRoYXQgYXJlIGxlc3MgdGhhbiA0MDBweCwgZGlzcGxheSB0aGUgYmFyIHZlcnRpY2FsbHksIGluc3RlYWQgb2YgaG9yaXpvbnRhbGx5ICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuc2lkZWJhciBhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<app-header></app-header>\t\t\n</div>\n<div class=\"row\" style=\"min-height: 100%;\">\n\t<div class=\"col-md-2\">\n\t\t<app-sidebar></app-sidebar>\t\t\n\t</div>\n\t<div class=\"col-md-10\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n<!-- <div class=\"row\">\n\t<app-footer></app-footer>\t\n</div>\n\n -->\n\n"

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
        this.title = 'application';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _update_form_update_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./update-form/update-form.component */ "./src/app/update-form/update-form.component.ts");
/* harmony import */ var _update_post_update_post_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./update-post/update-post.component */ "./src/app/update-post/update-post.component.ts");
/* harmony import */ var _update_student_update_student_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./update-student/update-student.component */ "./src/app/update-student/update-student.component.ts");
/* harmony import */ var _update_subject_update_subject_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./update-subject/update-subject.component */ "./src/app/update-subject/update-subject.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_7__["StudentComponent"],
                _subject_subject_component__WEBPACK_IMPORTED_MODULE_8__["SubjectComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
                _update_form_update_form_component__WEBPACK_IMPORTED_MODULE_14__["UpdateFormComponent"],
                _update_post_update_post_component__WEBPACK_IMPORTED_MODULE_15__["UpdatePostComponent"],
                _update_student_update_student_component__WEBPACK_IMPORTED_MODULE_16__["UpdateStudentComponent"],
                _update_subject_update_subject_component__WEBPACK_IMPORTED_MODULE_17__["UpdateSubjectComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\nposition: fixed;\n   left: 0;\n   bottom: 0;\n   width: 100%;\n   background-color: red;\n   color: white;\n   text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsZUFBZTtHQUNaLE9BQU87R0FDUCxTQUFTO0dBQ1QsV0FBVztHQUNYLHFCQUFxQjtHQUNyQixZQUFZO0dBQ1osa0JBQWtCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcbnBvc2l0aW9uOiBmaXhlZDtcbiAgIGxlZnQ6IDA7XG4gICBib3R0b206IDA7XG4gICB3aWR0aDogMTAwJTtcbiAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row footer bg-bs-info\">\n\t<div class=\"col-md-4 col-xs-12\">\n\t\t<ul class=\"list-group\">\n\t\t\t<h2>References</h2>\n\t\t\t<li class=\"list-group-item\">abcd</li>\n\t\t\t<li class=\"list-group-item\">pqrs</li>\n\t\t\t<li class=\"list-group-item\">xyzw</li>\n\t\t\t<li class=\"list-group-item\">fghr</li>\t\n\t\t</ul>\n\n\t</div>\n\t<div class=\"col-md-4 col-xs-12\">\n\t\t<ul class=\"list-group\">\n\t\t\t<h2>Quick Links</h2>\n\t\t\t<li class=\"list-group-item\"><a href=\"#\">abcd</a></li>\n\t\t\t<li class=\"list-group-item\"><a href=\"#\">pqrs</a></li>\n\t\t\t<li class=\"list-group-item\"><a href=\"#\">xyzw</a></li>\n\t\t\t<li class=\"list-group-item\"><a href=\"#\">fghr</a></li>\t\n\t\t</ul>\n\t</div>\n\t<div class=\"col-md-4 col-xs-12\">\n\t\t<ul class=\"list-group\">\n\t\t\t<h2>Contact us</h2>\n\t\t\t<li class=\"list-group-item\"><i class=\"fab fa-facebook\"></i>Facebook</li>\n\t\t\t<li class=\"list-group-item\"><i class=\"fab fa-skype\"></i>Skype</li>\n\t\t\t<li class=\"list-group-item\"><i class=\"fab fa-linkedin\"></i>LinkedIn</li>\n\t\t\t<li class=\"list-group-item\"><i class=\"fas fa-envelope\"></i>Gmail</li>\t\n\t\t</ul>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-padding{\n\tpadding: 15px;\t\n}\n.margin-right{margin-right: 0px;}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtBQUNkO0FBQ0EsY0FBYyxpQkFBaUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1wYWRkaW5ne1xuXHRwYWRkaW5nOiAxNXB4O1x0XG59XG4ubWFyZ2luLXJpZ2h0e21hcmdpbi1yaWdodDogMHB4O31cblxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row bg-bs-info\" id=\"header\">\n\t<div class=\"col-md-4 col-xs-12\">\n\t\t<img class=\"img-responsive image-padding\" src=\"./assets/images/logo.jpeg\" alt=\"Rao InfoTech\"/>\n\t</div>\n\t<div class=\"col-md-8 col-xs-12 font-64 text-left\">\n\t\tRAO INFOTECH\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin-top-25\" style=\"min-height: 500px;\">\n\n <div class=\"col-md-4\" id=\"form\">\n  <form id=\"user\" method=\"post\" name=\"Contact\">\n    <div class=\"form-group\">\n     <label for=\"Name\">Name</label>\n     <input type=\"text\" id=\"name\" name=\"name\" required class=\"form-control\" [(ngModel)]=\"details.name\"/>\n   </div>\n   <div class=\"form-group\">\n     <label for=\"data\">data</label>\n     <input type=\"text\" id=\"post\" name=\"post\" required class=\"form-control\" [(ngModel)]=\"details.data\"/>\n   </div> \n   <div class=\"form-group\">\n    <input type=\"submit\" id=\"btnsubmit\" class=\"btn btn-success\" (click)=\"addPosts(details)\" >\n  </div>\n</form>\n</div>\n\n<div class=\"col-md-8\" id=\"table\">\n <table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>Post name</th>\n      <th>Data</th>\n      <th>Edit</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor = \"let post of posts[0];let i=index\">\n      <td>{{post.name}}</td>\n      <td>{{post.data}}</td>\n      <td><button><a [routerLink] = \"['/updatePost',post._id]\">Update</a></button><button (click)=\"deletePost(post._id,i)\">Delete</button></td>\n    </tr>\n  </tbody>\n</table>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_postservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/postservices.service */ "./src/services/postservices.service.ts");



var PostComponent = /** @class */ (function () {
    function PostComponent(_postService, change) {
        this._postService = _postService;
        this.change = change;
        this.details = {
            name: "",
            data: ""
        };
        this.posts = [];
    }
    PostComponent.prototype.ngViewAfterChecked = function () {
        this.change.detectChanges();
    };
    PostComponent.prototype.ngOnInit = function () {
        this.getPosts();
        console.log("services array", this._postService.post_services);
        this.posts = this._postService.post_services;
        console.log("post array", this.posts);
        console.log("users of component.ts", this.posts);
    };
    PostComponent.prototype.addPosts = function (details) {
        var _this = this;
        this._postService.addPost(details).subscribe(function (res) {
            console.log("RESPONSE From API", res);
            _this.posts[0].push(res);
        }, function (err) {
            console.log("ERROR", err);
        });
    };
    PostComponent.prototype.getPosts = function () {
        this._postService.getPosts();
    };
    PostComponent.prototype.deletePost = function (post_id, i) {
        console.log(this.posts);
        console.log("postid", post_id);
        this._postService.deletePost(post_id);
        console.log(i);
        console.log(this.posts[0]);
        this.posts[0].splice(i, 1);
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_postservices_service__WEBPACK_IMPORTED_MODULE_2__["PostservicesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.sidebar {\n  margin: 0;\n  padding: 0;\n  width: 200px;\n  background-color: #f1f1f1;\n  position: fixed;\n  height: 50%;\n  overflow: auto;\n}\n\n\n.sidebar a {\n  display: block;\n  color: black;\n  padding: 16px;\n  text-decoration: none;\n}\n\n\n.sidebar a.active {\n  background-color: #4CAF50;\n  color: white;\n}\n\n\n.sidebar a:hover:not(.active) {\n  background-color: #555;\n  color: white;\n}\n\n\n/* Page content. The value of the margin-left property should match the value of the sidebar's width property */\n\n\ndiv.content {\n  margin-left: 200px;\n  padding: 1px 16px;\n  height: 1000px;\n}\n\n\n/* On screens that are less than 700px wide, make the sidebar into a topbar */\n\n\n@media screen and (max-width: 700px) {\n  .sidebar {\n    width: 100%;\n    height: auto;\n    position: relative;\n  }\n  .sidebar a {float: left;}\n  div.content {margin-left: 0;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7OztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7O0FBR0E7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOzs7QUFFQSwrR0FBK0c7OztBQUMvRztFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7O0FBRUEsNkVBQTZFOzs7QUFDN0U7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0EsWUFBWSxXQUFXLENBQUM7RUFDeEIsYUFBYSxjQUFjLENBQUM7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNpZGViYXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDUwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cblxuLnNpZGViYXIgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG4uc2lkZWJhciBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4uc2lkZWJhciBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogUGFnZSBjb250ZW50LiBUaGUgdmFsdWUgb2YgdGhlIG1hcmdpbi1sZWZ0IHByb3BlcnR5IHNob3VsZCBtYXRjaCB0aGUgdmFsdWUgb2YgdGhlIHNpZGViYXIncyB3aWR0aCBwcm9wZXJ0eSAqL1xuZGl2LmNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gIHBhZGRpbmc6IDFweCAxNnB4O1xuICBoZWlnaHQ6IDEwMDBweDtcbn1cblxuLyogT24gc2NyZWVucyB0aGF0IGFyZSBsZXNzIHRoYW4gNzAwcHggd2lkZSwgbWFrZSB0aGUgc2lkZWJhciBpbnRvIGEgdG9wYmFyICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuc2lkZWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuc2lkZWJhciBhIHtmbG9hdDogbGVmdDt9XG4gIGRpdi5jb250ZW50IHttYXJnaW4tbGVmdDogMDt9XG59Il19 */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <a routerLink=\"/user\">User</a>\n  <a routerLink=\"/post\">Post</a>\n  <a routerLink=\"/student\">Student</a>\n  <a routerLink=\"/subject\">Subject</a>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin-top-25\" style=\"min-height: 500px;\">\n\n <div class=\"col-md-4\" id=\"form\">\n  <form id=\"user\" method=\"post\" name=\"Contact\">\n    <div class=\"form-group\">\n     <label for=\"Name\">First_Name</label>\n     <input type=\"text\" id=\"name\" name=\"name\" required class=\"form-control\" [(ngModel)]=\"details.first_name\"/>\n   </div>\n   <div class=\"form-group\">\n     <label for=\"last name\">Last_Name</label>\n     <input type=\"text\" id=\"phone\" name=\"phone\" required class=\"form-control\" [(ngModel)]=\"details.last_name\"/>\n   </div> \n   <div class=\"form-group\">\n    <input type=\"submit\" id=\"btnsubmit\" class=\"btn btn-success\" (click)=\"addStudents(details)\" >\n  </div>\n</form>\n</div>\n\n<div class=\"col-md-8\" id=\"table\">\n <table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>Firstname</th>\n      <th>LastName</th>\n      <th>Edit</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor = \"let student of students[0]\">\n      <td>{{student.first_name}}</td>\n      <td>{{student.last_name}}</td>\n      <td><button><a [routerLink] = \"['/updateStudent',student._id]\">Update</a></button><button (click)=\"deleteStudent(student._id)\">Delete</button></td>\n    </tr>\n  </tbody>\n</table>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_studentservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/studentservices.service */ "./src/services/studentservices.service.ts");



var StudentComponent = /** @class */ (function () {
    function StudentComponent(_studentService) {
        this._studentService = _studentService;
        this.details = {
            first_name: "",
            last_name: ""
        };
        this.students = [];
    }
    StudentComponent.prototype.ngOnInit = function () {
        this.getStudents();
        console.log("services array", this._studentService.student_services);
        this.students = this._studentService.student_services;
        console.log("students of component.ts", this.students);
    };
    StudentComponent.prototype.addStudents = function (details) {
        this._studentService.addStudents(details).subscribe(function (res) {
            console.log("RESPONSE From API", res);
        }, function (err) {
            console.log("ERROR", err);
        });
    };
    StudentComponent.prototype.getStudents = function () {
        this._studentService.getStudents();
    };
    StudentComponent.prototype.deleteStudent = function (student_id) {
        console.log(this.students);
        console.log("userid", student_id);
        this._studentService.deleteStudent(student_id);
    };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_studentservices_service__WEBPACK_IMPORTED_MODULE_2__["StudentservicesService"]])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/subject/subject.component.css":
/*!***********************************************!*\
  !*** ./src/app/subject/subject.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3Qvc3ViamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/subject/subject.component.html":
/*!************************************************!*\
  !*** ./src/app/subject/subject.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin-top-25\" style=\"min-height: 500px;\">\n\n <div class=\"col-md-4\" id=\"form\">\n  <form id=\"user\" method=\"post\" name=\"Contact\">\n    <div class=\"form-group\">\n     <label for=\"Name\">Name</label>\n     <input type=\"text\" id=\"name\" name=\"name\" required class=\"form-control\" [(ngModel)]=\"details.name\"/>\n   </div>\n   <div class=\"form-group\">\n     <label for=\"grade\">Grade</label>\n     <input type=\"text\" id=\"grade\" name=\"grade\" required class=\"form-control\" [(ngModel)]=\"details.grade\"/>\n   </div> \n   <div class=\"form-group\">\n    <input type=\"submit\" id=\"btnsubmit\" class=\"btn btn-success\" (click)=\"addSubjects(details)\" >\n  </div>\n</form>\n</div>\n\n<div class=\"col-md-8\" id=\"table\">\n <table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Grade</th>\n      <th>Edit</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor = \"let subject of subjects[0]\">\n      <td>{{subject.name}}</td>\n      <td>{{subject.grade}}</td>\n      <td><button><a [routerLink] = \"['/updateSubject',subject._id]\">Update</a></button><button (click)=\"deleteSubject(subject._id)\">Delete</button></td>\n    </tr>\n  </tbody>\n</table>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/subject/subject.component.ts":
/*!**********************************************!*\
  !*** ./src/app/subject/subject.component.ts ***!
  \**********************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/subject.service */ "./src/services/subject.service.ts");



var SubjectComponent = /** @class */ (function () {
    function SubjectComponent(_subjectService) {
        this._subjectService = _subjectService;
        this.details = {
            name: "",
            grade: ""
        };
        this.subjects = [];
    }
    SubjectComponent.prototype.ngOnInit = function () {
        this.getSubjects();
        console.log("services array", this._subjectService.subject_services);
        this.subjects = this._subjectService.subject_services;
        console.log("students of component.ts", this.subjects);
    };
    SubjectComponent.prototype.addSubjects = function (details) {
        this._subjectService.addSubjects(details).subscribe(function (res) {
            console.log("RESPONSE From API", res);
        }, function (err) {
            console.log("ERROR", err);
        });
    };
    SubjectComponent.prototype.getSubjects = function () {
        this._subjectService.getSubjects();
    };
    SubjectComponent.prototype.deleteSubject = function (subject_id) {
        console.log(this.subjects);
        console.log("subjectid", subject_id);
        this._subjectService.deleteSubject(subject_id);
    };
    SubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject',
            template: __webpack_require__(/*! ./subject.component.html */ "./src/app/subject/subject.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"]])
    ], SubjectComponent);
    return SubjectComponent;
}());



/***/ }),

/***/ "./src/app/update-form/update-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/update-form/update-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1mb3JtL3VwZGF0ZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/update-form/update-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/update-form/update-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 margin-25\" id=\"form\">\n  <form id=\"user\" method=\"post\" name=\"Contact\" *ngIf=\"detailsToUpdate\">\n    <div class=\"form-group\">\n     <label for=\"Name\">Name</label>\n     <input type=\"text\" id=\"name\" name=\"name\" required class=\"form-control\" [(ngModel)]=\"detailsToUpdate.name\"  />\n   </div>\n   <div class=\"form-group\">\n     <label for=\"phone no\">Phone no:</label>\n     <input type=\"tel\" id=\"phone\" name=\"phone\" required class=\"form-control\" [(ngModel)]=\"detailsToUpdate.phone\" />\n   </div>\t\n   <div class=\"form-group\">\n    <input type=\"submit\" id=\"btnsubmit\" class=\"btn btn-success\" (click)=\"updateUser(detailsToUpdate)\" >\n  </div>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/update-form/update-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/update-form/update-form.component.ts ***!
  \******************************************************/
/*! exports provided: UpdateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFormComponent", function() { return UpdateFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/services/user.service.ts");




var UpdateFormComponent = /** @class */ (function () {
    function UpdateFormComponent(route, _userService) {
        var _this = this;
        this.route = route;
        this._userService = _userService;
        this.route.queryParams.subscribe(function (params) {
            _this.id = _this.route.snapshot.paramMap.get('id');
            _this._userService.getUserById(_this.id);
        });
    }
    UpdateFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.detailsToUpdate = _this._userService.foundUser[0];
        }, 1000);
    };
    UpdateFormComponent.prototype.updateUser = function (detailsToUpdate) {
        console.log(".ts update array", this.detailsToUpdate);
        this._userService.updateUser(this.detailsToUpdate);
    };
    UpdateFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-form',
            template: __webpack_require__(/*! ./update-form.component.html */ "./src/app/update-form/update-form.component.html"),
            styles: [__webpack_require__(/*! ./update-form.component.css */ "./src/app/update-form/update-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UpdateFormComponent);
    return UpdateFormComponent;
}());



/***/ }),

/***/ "./src/app/update-post/update-post.component.css":
/*!*******************************************************!*\
  !*** ./src/app/update-post/update-post.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1wb3N0L3VwZGF0ZS1wb3N0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/update-post/update-post.component.html":
/*!********************************************************!*\
  !*** ./src/app/update-post/update-post.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 margin-25\" id=\"form\">\n  <form id=\"post\" method=\"post\" name=\"Contact\" *ngIf=\"detailsToUpdate\">\n    <div class=\"form-group\">\n     <label for=\"Name\">Name</label>\n     <input type=\"text\" id=\"name\" name=\"name\" required class=\"form-control\" [(ngModel)]=\"detailsToUpdate.name\"  />\n   </div>\n   <div class=\"form-group\">\n     <label for=\"phone no\">Data:</label>\n     <input type=\"tel\" id=\"phone\" name=\"phone\" required class=\"form-control\" [(ngModel)]=\"detailsToUpdate.data\" />\n   </div>\t\n   <div class=\"form-group\">\n    <input type=\"submit\" id=\"btnsubmit\" class=\"btn btn-success\" (click)=\"updatePost(detailsToUpdate)\" >\n  </div>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/update-post/update-post.component.ts":
/*!******************************************************!*\
  !*** ./src/app/update-post/update-post.component.ts ***!
  \******************************************************/
/*! exports provided: UpdatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePostComponent", function() { return UpdatePostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_postservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/postservices.service */ "./src/services/postservices.service.ts");




var UpdatePostComponent = /** @class */ (function () {
    function UpdatePostComponent(route, _postService) {
        var _this = this;
        this.route = route;
        this._postService = _postService;
        this.route.queryParams.subscribe(function (params) {
            _this.id = _this.route.snapshot.paramMap.get('id');
            _this._postService.getPostById(_this.id);
        });
    }
    UpdatePostComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.detailsToUpdate = _this._postService.foundPost[0];
        }, 1000);
    };
    UpdatePostComponent.prototype.updatePost = function (detailsToUpdate) {
        console.log(".ts update array", this.detailsToUpdate);
        this._postService.updatePost(this.detailsToUpdate);
    };
    UpdatePostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-post',
            template: __webpack_require__(/*! ./update-post.component.html */ "./src/app/update-post/update-post.component.html"),
            styles: [__webpack_require__(/*! ./update-post.component.css */ "./src/app/update-post/update-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_postservices_service__WEBPACK_IMPORTED_MODULE_3__["PostservicesService"]])
    ], UpdatePostComponent);
    return UpdatePostComponent;
}());



/***/ }),

/***/ "./src/app/update-student/update-student.component.css":
/*!*************************************************************!*\
  !*** ./src/app/update-student/update-student.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1zdHVkZW50L3VwZGF0ZS1zdHVkZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/update-student/update-student.component.html":
/*!**************************************************************!*\
  !*** ./src/app/update-student/update-student.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 margin-25\" id=\"form\">\n  <form id=\"post\" method=\"post\" name=\"Contact\" *ngIf=\"detailsToUpdate\">\n    <div class=\"form-group\">\n     <label for=\"Name\">First Name</label>\n     <input type=\"text\" id=\"name\" name=\"name\" required class=\"form-control\" [(ngModel)]=\"detailsToUpdate.first_name\"  />\n   </div>\n   <div class=\"form-group\">\n     <label for=\"name\">Last Name</label>\n     <input type=\"text\" id=\"phone\" name=\"phone\" required class=\"form-control\" [(ngModel)]=\"detailsToUpdate.last_name\" />\n   </div>\t\n   <div class=\"form-group\">\n    <input type=\"submit\" id=\"btnsubmit\" class=\"btn btn-success\" (click)=\"updateStudent(detailsToUpdate)\" >\n  </div>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/update-student/update-student.component.ts":
/*!************************************************************!*\
  !*** ./src/app/update-student/update-student.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStudentComponent", function() { return UpdateStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_studentservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/studentservices.service */ "./src/services/studentservices.service.ts");




var UpdateStudentComponent = /** @class */ (function () {
    function UpdateStudentComponent(route, _studentService) {
        var _this = this;
        this.route = route;
        this._studentService = _studentService;
        this.route.queryParams.subscribe(function (params) {
            _this.id = _this.route.snapshot.paramMap.get('id');
            _this._studentService.getStudentById(_this.id);
        });
    }
    UpdateStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.detailsToUpdate = _this._studentService.foundStudent[0];
        }, 1000);
    };
    UpdateStudentComponent.prototype.updateStudent = function (detailsToUpdate) {
        console.log(".ts update array", this.detailsToUpdate);
        this._studentService.updateStudent(this.detailsToUpdate);
    };
    UpdateStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-student',
            template: __webpack_require__(/*! ./update-student.component.html */ "./src/app/update-student/update-student.component.html"),
            styles: [__webpack_require__(/*! ./update-student.component.css */ "./src/app/update-student/update-student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_studentservices_service__WEBPACK_IMPORTED_MODULE_3__["StudentservicesService"]])
    ], UpdateStudentComponent);
    return UpdateStudentComponent;
}());



/***/ }),

/***/ "./src/app/update-subject/update-subject.component.css":
/*!*************************************************************!*\
  !*** ./src/app/update-subject/update-subject.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1zdWJqZWN0L3VwZGF0ZS1zdWJqZWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/update-subject/update-subject.component.html":
/*!**************************************************************!*\
  !*** ./src/app/update-subject/update-subject.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 margin-25\" id=\"form\">\n  <form id=\"form\" method=\"post\" name=\"Contact\" *ngIf=\"detailsToUpdate\">\n    <div class=\"form-group\">\n     <label for=\"Name\">First Name</label>\n     <input type=\"text\" id=\"name\" name=\"name\" required class=\"form-control\" [(ngModel)]=\"detailsToUpdate.name\"  />\n   </div>\n   <div class=\"form-group\">\n     <label for=\"grade\">Grade</label>\n     <input type=\"text\" id=\"grade\" name=\"grade\" required class=\"form-control\" [(ngModel)]=\"detailsToUpdate.grade\" />\n   </div>\t\n   <div class=\"form-group\">\n    <input type=\"submit\" id=\"btnsubmit\" class=\"btn btn-success\" (click)=\"updateSubject(detailsToUpdate)\">\n  </div>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/update-subject/update-subject.component.ts":
/*!************************************************************!*\
  !*** ./src/app/update-subject/update-subject.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateSubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSubjectComponent", function() { return UpdateSubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/subject.service */ "./src/services/subject.service.ts");




var UpdateSubjectComponent = /** @class */ (function () {
    function UpdateSubjectComponent(route, _subjectService) {
        var _this = this;
        this.route = route;
        this._subjectService = _subjectService;
        this.route.queryParams.subscribe(function (params) {
            _this.id = _this.route.snapshot.paramMap.get('id');
            _this._subjectService.getSubjectById(_this.id);
        });
    }
    UpdateSubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.detailsToUpdate = _this._subjectService.foundSubject[0];
        }, 1000);
    };
    UpdateSubjectComponent.prototype.updateSubject = function (detailsToUpdate) {
        console.log(".ts update array", this.detailsToUpdate);
        this._subjectService.updateSubject(this.detailsToUpdate);
    };
    UpdateSubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-subject',
            template: __webpack_require__(/*! ./update-subject.component.html */ "./src/app/update-subject/update-subject.component.html"),
            styles: [__webpack_require__(/*! ./update-subject.component.css */ "./src/app/update-subject/update-subject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"]])
    ], UpdateSubjectComponent);
    return UpdateSubjectComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin-top-25\" style=\"min-height: 500px;\">\n\n <div class=\"col-md-4\" id=\"form\">\n  <form id=\"user\" method=\"post\" name=\"Contact\">\n    <div class=\"form-group\">\n     <label for=\"Name\">Name</label>\n     <input type=\"text\" id=\"name\" name=\"name\" required class=\"form-control\" [(ngModel)]=\"details.name\"/>\n   </div>\n   <div class=\"form-group\">\n     <label for=\"phone no\">Phone no:</label>\n     <input type=\"tel\" id=\"phone\" name=\"phone\" required class=\"form-control\" [(ngModel)]=\"details.phone\"/>\n   </div>\t\n   <div class=\"form-group\">\n    <input type=\"submit\" id=\"btnsubmit\" class=\"btn btn-success\" (click)=\"addData(details)\" >\n  </div>\n</form>\n</div>\n\n<div class=\"col-md-8\" id=\"table\">\n <table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>Firstname</th>\n      <th>Phone</th>\n      <th>Edit</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor = \"let user of users[0];let i=index\">\n      <td>{{user.name}}</td>\n      <td>{{user.phone}}</td>\n      <td><button><a [routerLink] = \"['/update',user._id]\">Update</a></button><button (click)=\"deleteUser(user._id,i)\">Delete</button></td>\n    </tr>\n  </tbody>\n</table>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/services/user.service.ts");



var UserComponent = /** @class */ (function () {
    function UserComponent(_userService, change) {
        this._userService = _userService;
        this.change = change;
        this.details = {
            name: "",
            phone: ""
        };
        this.users = [];
    }
    UserComponent.prototype.ngViewAfterChecked = function () {
        this.change.detectChanges();
    };
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
        console.log("services array", this._userService.users_services);
        this.users = this._userService.users_services;
        console.log("users of component.ts", this.users);
    };
    UserComponent.prototype.addData = function (details) {
        var _this = this;
        this._userService.addData(details).subscribe(function (res) {
            console.log("RESPONSE From API", res);
            _this.users[0].push(res);
        }, function (err) {
            console.log("ERROR", err);
        });
    };
    UserComponent.prototype.getUsers = function () {
        this._userService.getUsers();
    };
    UserComponent.prototype.deleteUser = function (user_id, i) {
        console.log(this.users);
        console.log("userid", user_id);
        this._userService.deleteUser(user_id);
        this.users.splice[0](i, 1);
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
    apiBaseUrl: 'http://54.185.16.135:4000/'
};
//# sourceMappingURL=config.js.map

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

/***/ "./src/services/postservices.service.ts":
/*!**********************************************!*\
  !*** ./src/services/postservices.service.ts ***!
  \**********************************************/
/*! exports provided: PostservicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostservicesService", function() { return PostservicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.js");




var PostservicesService = /** @class */ (function () {
    function PostservicesService(http) {
        this.http = http;
        this.post_services = [];
    }
    PostservicesService.prototype.addPost = function (body) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "post", body);
    };
    PostservicesService.prototype.getPosts = function () {
        var _this = this;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "posts").subscribe(function (res) {
            _this.post_services.push(res);
            return _this.post_services;
        }, function (err) {
            console.log(err);
        });
    };
    PostservicesService.prototype.getPostById = function (id) {
        var _this = this;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "post" + id).subscribe(function (res) {
            console.log("foundPost :", res);
            return _this.foundPost = res;
        }, function (err) {
            console.log(err);
        });
        ;
    };
    PostservicesService.prototype.updatePost = function (body) {
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "updatepost", body).subscribe(function (res) {
            console.log("service_body : ", res);
        }, function (err) {
            console.log(err);
        });
    };
    PostservicesService.prototype.deletePost = function (uid) {
        console.log("uid :", uid);
        var id = uid;
        return this.http.delete(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "deletepost" + id).subscribe(function (res) {
            console.log("delete from service :", res);
        }, function (err) {
            console.log(err);
        });
    };
    PostservicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostservicesService);
    return PostservicesService;
}());



/***/ }),

/***/ "./src/services/studentservices.service.ts":
/*!*************************************************!*\
  !*** ./src/services/studentservices.service.ts ***!
  \*************************************************/
/*! exports provided: StudentservicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentservicesService", function() { return StudentservicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.js");




var StudentservicesService = /** @class */ (function () {
    function StudentservicesService(http) {
        this.http = http;
        this.student_services = [];
    }
    StudentservicesService.prototype.addStudents = function (body) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "/student", body);
    };
    StudentservicesService.prototype.getStudents = function () {
        var _this = this;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "/students").subscribe(function (res) {
            _this.student_services.push(res);
            console.log("service array", _this.student_services);
            return _this.student_services;
        }, function (err) {
            console.log(err);
        });
    };
    StudentservicesService.prototype.getStudentById = function (id) {
        var _this = this;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "/student/" + id).subscribe(function (res) {
            console.log("foundStudent :", res);
            return _this.foundStudent = res;
        }, function (err) {
            console.log(err);
        });
        ;
    };
    StudentservicesService.prototype.updateStudent = function (body) {
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "/updatestudent", body).subscribe(function (res) {
            console.log("body", body);
            console.log("service_body : ", res);
        }, function (err) {
            console.log(err);
        });
    };
    StudentservicesService.prototype.deleteStudent = function (uid) {
        console.log("uid :", uid);
        var id = uid;
        return this.http.delete(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "/deletestudent/" + id).subscribe(function (res) {
            console.log("delete from service :", res);
        }, function (err) {
            console.log(err);
        });
    };
    StudentservicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StudentservicesService);
    return StudentservicesService;
}());



/***/ }),

/***/ "./src/services/subject.service.ts":
/*!*****************************************!*\
  !*** ./src/services/subject.service.ts ***!
  \*****************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.js");




var SubjectService = /** @class */ (function () {
    function SubjectService(http) {
        this.http = http;
        this.subject_services = [];
    }
    SubjectService.prototype.addSubjects = function (body) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "/subject", body);
    };
    SubjectService.prototype.getSubjects = function () {
        var _this = this;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "/subjects").subscribe(function (res) {
            _this.subject_services.push(res);
            console.log("service array", _this.subject_services);
            return _this.subject_services;
        }, function (err) {
            console.log(err);
        });
    };
    SubjectService.prototype.getSubjectById = function (id) {
        var _this = this;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "/subject/" + id).subscribe(function (res) {
            console.log("foundSubject :", res);
            return _this.foundSubject = res;
        }, function (err) {
            console.log(err);
        });
        ;
    };
    SubjectService.prototype.updateSubject = function (body) {
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "/updatesubject", body).subscribe(function (res) {
            console.log("service_body : ", res);
        }, function (err) {
            console.log(err);
        });
    };
    SubjectService.prototype.deleteSubject = function (uid) {
        console.log("uid :", uid);
        var id = uid;
        return this.http.delete(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "/deletesubject/" + id).subscribe(function (res) {
            console.log("delete from service :", res);
        }, function (err) {
            console.log(err);
        });
    };
    SubjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SubjectService);
    return SubjectService;
}());



/***/ }),

/***/ "./src/services/user.service.ts":
/*!**************************************!*\
  !*** ./src/services/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.js");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.users_services = [];
    }
    UserService.prototype.addData = function (body) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "/user", body);
    };
    UserService.prototype.getUsers = function () {
        var _this = this;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "/users").subscribe(function (res) {
            _this.users_services.push(res);
            console.log("service array", _this.users_services);
            return _this.users_services;
        }, function (err) {
            console.log(err);
        });
    };
    UserService.prototype.getUserById = function (id) {
        var _this = this;
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "/user/" + id).subscribe(function (res) {
            console.log("foundUser :", res);
            return _this.foundUser = res;
        }, function (err) {
            console.log(err);
        });
        ;
    };
    UserService.prototype.updateUser = function (body) {
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "/updateuser", body).subscribe(function (res) {
            console.log("service_body : ", res);
        }, function (err) {
            console.log(err);
        });
    };
    UserService.prototype.deleteUser = function (uid) {
        console.log("uid :", uid);
        var id = uid;
        return this.http.delete(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiBaseUrl + "/deleteuser/" + id).subscribe(function (res) {
            console.log("delete from service :", res);
        }, function (err) {
            console.log(err);
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/ngApp/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map