import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
var UpdateFormComponent = /** @class */ (function () {
    function UpdateFormComponent(route, _userService) {
        var _this = this;
        this.route = route;
        this._userService = _userService;
        this.route.queryParams.subscribe(function (params) {
            _this.id = _this.route.snapshot.paramMap.get('id');
            console.log(_this.id);
            _this._userService.getUserById(_this.id);
        });
    }
    UpdateFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this._userService.foundUser);
            _this.detailsToUpdate =
            ;
        }, 1000);
    };
    UpdateFormComponent = tslib_1.__decorate([
        Component({
            selector: 'app-update-form',
            templateUrl: './update-form.component.html',
            styleUrls: ['./update-form.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, UserService])
    ], UpdateFormComponent);
    return UpdateFormComponent;
}());
export { UpdateFormComponent };
//# sourceMappingURL=update-form.component.js.map