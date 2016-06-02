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
const cca_component_1 = require('./cca.component');
const cca_service_1 = require('./cca.service');
let AppComponent = class AppComponent {
    constructor(ccaService) {
        this.ccaService = ccaService;
        this.Componenti = [];
    }
    ngOnInit() {
        this.ccaService.getComponenti().then((data) => data.forEach(c => this.Componenti.push(c)));
    }
    salvaComponenti() {
        debugger;
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: `<h1>CCA</h1>
<form>
    <div class="row">
        <div class="col-sm-4" *ngFor="let componente of Componenti">
            <dettaglio-componente [componente]="componente"></dettaglio-componente>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <button type="button" class="btn btn-primary" (click)="salvaComponenti()">Salva</button>
        </div>
    </div>
</form>
`,
        directives: [cca_component_1.DettaglioComponente],
        providers: [cca_service_1.CCAService]
    }), 
    __metadata('design:paramtypes', [cca_service_1.CCAService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map