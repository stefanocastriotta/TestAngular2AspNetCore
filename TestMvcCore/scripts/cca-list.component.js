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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var cca_component_1 = require('./cca.component');
var cca_service_1 = require('./cca.service');
var variables_1 = require('./variables');
var CCAListComponent = (function () {
    function CCAListComponent(_baseUrl, ccaService) {
        this._baseUrl = _baseUrl;
        this.ccaService = ccaService;
        this.Componenti = [];
    }
    CCAListComponent.prototype.ngOnInit = function () {
        $("#jqGrid").jqGrid({
            url: this._baseUrl + "/api/values/GetComponenti",
            datatype: "json",
            mtype: "GET",
            colModel: [{ name: 'Anno', index: 'Anno', width: 90 },
                { name: 'Mese', index: 'Mese', width: 100, align: 'center' },
                { name: 'Fascia', index: 'Fascia', width: 90 },
                { name: 'Valore', index: 'Valore', width: 90 }
            ],
            sortname: 'Anno',
            viewrecords: true,
            sortorder: 'desc',
            caption: 'My First Grid'
        });
    };
    CCAListComponent.prototype.apriCopiaComponenti = function () {
        var _this = this;
        this.ccaService.getComponenti().then(function (data) {
            data.forEach(function (c) {
                _this.Componenti.push(c);
            });
        });
    };
    CCAListComponent.prototype.salvaComponenti = function () {
        debugger;
        this.ccaService.salvaComponenti(this.Componenti);
    };
    CCAListComponent = __decorate([
        core_1.Component({
            selector: 'cca-list',
            templateUrl: 'Home/CCA',
            directives: [cca_component_1.DettaglioComponente]
        }),
        __param(0, core_2.Inject(variables_1.BASEURL)), 
        __metadata('design:paramtypes', [String, cca_service_1.CCAService])
    ], CCAListComponent);
    return CCAListComponent;
}());
exports.CCAListComponent = CCAListComponent;
//# sourceMappingURL=cca-list.component.js.map