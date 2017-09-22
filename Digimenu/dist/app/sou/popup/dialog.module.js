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
var dialog_component_1 = require("./dialog.component");
var common_1 = require("@angular/common");
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    DialogModule = __decorate([
        core_1.NgModule({
            exports: [dialog_component_1.DialogComponent],
            declarations: [dialog_component_1.DialogComponent],
            imports: [common_1.CommonModule, forms_1.FormsModule, material_1.MdCardModule, material_2.MdDialogModule, animations_1.BrowserAnimationsModule]
        })
    ], DialogModule);
    return DialogModule;
}());
exports.DialogModule = DialogModule;
//# sourceMappingURL=dialog.module.js.map