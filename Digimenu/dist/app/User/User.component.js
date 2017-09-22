"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var User_service_1 = require("./User.service");
var Usercomponent = /** @class */ (function () {
    function Usercomponent(router, _userdata) {
        this.router = router;
        this._userdata = _userdata;
        this.username = "hai";
        this.allProduct = [];
    }
    Usercomponent.prototype.ngOnInit = function () {
    };
    Usercomponent.prototype.onSubmitClicked = function () {
        var _this = this;
        console.log();
        console.log(this.username, this.dob, this.mail);
        this._userdata.getUser().subscribe(function (data) {
            _this.allProduct = data;
        });
        console.log(this._userdata);
        this.router.navigateByUrl('details');
    };
    Usercomponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            selector: "user",
            templateUrl: "./../app/User/User.html",
            providers: [User_service_1.Userdataservice]
        }),
        __metadata("design:paramtypes", [router_1.Router, User_service_1.Userdataservice])
    ], Usercomponent);
    return Usercomponent;
}());
exports.Usercomponent = Usercomponent;
//# sourceMappingURL=User.component.js.map