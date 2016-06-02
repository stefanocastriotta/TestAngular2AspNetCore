import { Component, Input } from '@angular/core';
import { Componente } from './componente';
@Component({
    selector: 'dettaglio-componente',
    templateUrl: 'Home/CCADetail'
})
export class DettaglioComponente {
    @Input()
    componente: Componente;
}