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
let CCAService = class CCAService {
    getComponenti() {
        return Promise.resolve([
            { Anno: 2016, Mese: 1, Fascia: "F0", Valore: 2.5, IDFascia: 0 },
            { Anno: 2016, Mese: 1, Fascia: "F1", Valore: 7.41, IDFascia: 1 },
            { Anno: 2016, Mese: 1, Fascia: "F2", Valore: 3.68, IDFascia: 2 },
            { Anno: 2016, Mese: 2, Fascia: "F0", Valore: 9.11, IDFascia: 0 },
            { Anno: 2016, Mese: 2, Fascia: "F1", Valore: 1.06, IDFascia: 1 },
            { Anno: 2016, Mese: 2, Fascia: "F2", Valore: 5.12, IDFascia: 2 }
        ]);
    }
};
CCAService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], CCAService);
exports.CCAService = CCAService;
//# sourceMappingURL=cca.service.js.map