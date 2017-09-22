"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Boot_Component_1 = require("./Boot.Component");
var common_1 = require("@angular/common");
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var material_3 = require("@angular/material");
var dialog_module_1 = require("../../app/popup/dialog.module");
var material_4 = require("@angular/material");
var BootModule = /** @class */ (function () {
    function BootModule() {
    }
    BootModule = __decorate([
        core_1.NgModule({
            exports: [Boot_Component_1.Bootcomponent],
            declarations: [Boot_Component_1.Bootcomponent],
            imports: [common_1.CommonModule, forms_1.FormsModule, material_1.MdGridListModule, material_2.MdSelectModule, material_3.MdCardModule, dialog_module_1.DialogModule, material_4.MdDialogModule]
        })
    ], BootModule);
    return BootModule;
}());
exports.BootModule = BootModule;
//# sourceMappingURL=Boot.Module.js.map