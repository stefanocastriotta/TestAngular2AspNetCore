import { Component } from '@angular/core';
import { Componente } from './componente';
import { DettaglioComponente } from './cca.component';
import { CCAService } from './cca.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'cca-list',
    templateUrl: 'Home/CCA',
    directives: [DettaglioComponente]
})
export class CCAListComponent implements OnInit {
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