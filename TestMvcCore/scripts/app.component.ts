import { Component } from '@angular/core';
import { Componente } from './componente';
import { DettaglioComponente } from './cca.component';
import { CCAService } from './cca.service';
import { OnInit } from '@angular/core';

@Component({
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
    directives: [DettaglioComponente],
    providers: [CCAService]
})
export class AppComponent implements OnInit {
    public Componenti: Componente[];

    constructor(private ccaService: CCAService) {
        this.Componenti = [];
    }

    ngOnInit() {
        this.ccaService.getComponenti().then((data) => data.forEach(c => this.Componenti.push(c)));
    }

    salvaComponenti() {
        debugger;
    }
}