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
const core_1 = require('@angular/core');
const router_deprecated_1 = require('@angular/router-deprecated');
const cca_service_1 = require('./cca.service');
const cca_list_component_1 = require('./cca-list.component');
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Gestione componenti';
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: '/Home/Elenco',
        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
        providers: [
            router_deprecated_1.ROUTER_PROVIDERS,
            cca_service_1.CCAService
        ]
    }),
    router_deprecated_1.RouteConfig([
        {
            path: '/ElencoCCA',
            name: 'CCA',
            component: cca_list_component_1.CCAListComponent
        }
    ]), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map