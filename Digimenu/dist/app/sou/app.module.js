"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var Boot_Module_1 = require("./Boot/Boot.Module");
var Boot_Component_1 = require("./Boot/Boot.Component");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var material_2 = require("@angular/material");
var dialog_module_1 = require("../app/popup/dialog.module");
var appRoutes = [
    { path: '', component: Boot_Component_1.Bootcomponent },
    { path: 'details', component: Boot_Component_1.Bootcomponent }
    //  { path: '**', component:Appcomponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                Boot_Module_1.BootModule,
                material_1.MdSelectModule,
                material_2.MdDialogModule,
                dialog_module_1.DialogModule,
                router_1.RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            declarations: [app_component_1.Appcomponent],
            bootstrap: [app_component_1.Appcomponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map