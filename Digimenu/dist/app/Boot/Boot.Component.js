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
var material_1 = require("@angular/material");
var dialog_component_1 = require("../../app/popup/dialog.component");
var Bootcomponent = /** @class */ (function () {
    function Bootcomponent(dialog) {
        this.dialog = dialog;
        this.tiles = [
            { image: '../../app/images/f1.jpg', text: "haiee" },
            { image: '../../app/images/f2.jpg', text: "haiidiot" },
            { image: '../../app/images/f3.jpg', text: "hai" },
            { image: '../../app/images/f4.jpg', text: "hai" },
            { image: '../../app/images/f5.jpg', text: "hai" },
            { image: '../../app/images/f6.jpg', text: "hai" },
            { image: '../../app/images/f7.jpg', text: "hai" },
            { image: '../../app/images/f8.jpg', text: "hai" },
            { image: '../../app/images/f9.jpg', text: "hai" }
        ];
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    Bootcomponent.prototype.navigate = function (tiles) {
        alert(tiles.text);
    };
    Bootcomponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(dialog_component_1.DialogComponent, {
            width: '250px',
            data: { name: "abc", animal: "abc" }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    Bootcomponent = __decorate([
        core_1.Component({
            selector: "boot",
            templateUrl: "../../app/Boot/boot.html",
            styleUrls: ['../../app/Boot/card-fancy-example.css']
        }),
        __metadata("design:paramtypes", [material_1.MdDialog])
    ], Bootcomponent);
    return Bootcomponent;
}());
exports.Bootcomponent = Bootcomponent;
//# sourceMappingURL=Boot.Component.js.map