import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.users_services = [];
    }
    UserService.prototype.addData = function (body) {
        return this.http.post(config.apiBaseUrl+"/user", body);
    };
    UserService.prototype.getUsers = function () {
        var _this = this;
        this.http.get(config.apiBaseUrl+"/users").subscribe(function (res) {
            _this.users_services.push(res);
            console.log("service array", _this.users_services);
            return _this.users_services;
        }, function (err) {
            console.log(err);
        });
    };
    UserService.prototype.getUserById = function (id) {
        var _this = this;
        return this.http.get(config.apiBaseUrl+"/user/" + id).subscribe(function (res) {
            console.log("foundUser :", res);
            _this.foundUser = res;
        }, function (err) {
            console.log(err);
        });
        ;
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map