import { Component } from '@angular/core';
import { Componente } from './componente';
import { DettaglioComponente } from './cca.component';
import { CCAService } from './cca.service';
import { OnInit } from '@angular/core';

declare var $: any;
declare var baseUrl: string;

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
        $("#jqGrid").jqGrid({
            url: baseUrl + "/api/values/GetComponenti",
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
    }

    apriCopiaComponenti() {
        this.ccaService.getComponenti().then((data) => {
            data.forEach(c => {
                this.Componenti.push(c);
            });
        });
    }

    salvaComponenti() {
        debugger;
    }
}