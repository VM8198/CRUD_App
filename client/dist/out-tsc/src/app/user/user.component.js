import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
var UserComponent = /** @class */ (function () {
    function UserComponent(_userService) {
        this._userService = _userService;
        this.details = {
            name: "",
            phone: ""
        };
        this.users = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
        console.log("services array", this._userService.users_services);
        this.users = this._userService.users_services;
        console.log("users of component.ts", this.users);
    };
    UserComponent.prototype.addData = function (details) {
        this._userService.addData(details).subscribe(function (res) {
            console.log("RESPONSE From API", res);
        }, function (err) {
            console.log("ERROR", err);
        });
    };
    UserComponent.prototype.getUsers = function () {
        this._userService.getUsers();
    };
    UserComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], UserComponent);
    return UserComponent;
}());
export { UserComponent };
//# sourceMappingURL=user.component.js.map