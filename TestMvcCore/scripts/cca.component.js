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
const componente_1 = require('./componente');
let DettaglioComponente = class DettaglioComponente {
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', componente_1.Componente)
], DettaglioComponente.prototype, "componente", void 0);
DettaglioComponente = __decorate([
    core_1.Component({
        selector: 'dettaglio-componente',
        template: `
    <div class="form-group">
        <label>Fascia</label>
        <p class="form-control-static">{{componente.Fascia}} (id: {{componente.IDFascia}})</p>
    </div>
    <div class="form-group">
        <label>Anno</label>
        <input type="number" class="form-control" [(ngModel)]="componente.Anno"/>
    </div>
    <div class="form-group">
        <label>Mese</label>
        <input type="number" class="form-control" [(ngModel)]="componente.Mese"/>
    </div>
    <div class="form-group">
        <label>Valore</label>
        <input type="number" class="form-control" [(ngModel)]="componente.Valore"/>
    </div>
    <div class="form-group">
        <label>Valore Pieno</label>
        <input type="number" class="form-control" [(ngModel)]="componente.ValorePieno"/>
    </div>
  `
    }), 
    __metadata('design:paramtypes', [])
], DettaglioComponente);
exports.DettaglioComponente = DettaglioComponente;
//# sourceMappingURL=cca.component.js.map