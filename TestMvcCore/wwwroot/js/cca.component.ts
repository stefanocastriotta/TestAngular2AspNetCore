import { Component, Input } from '@angular/core';
import { Componente } from './componente';
@Component({
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
})
export class DettaglioComponente {
    @Input()
    componente: Componente;
}