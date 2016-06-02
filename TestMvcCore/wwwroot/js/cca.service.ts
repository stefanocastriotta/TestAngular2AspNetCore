import { Injectable } from '@angular/core';
import { Componente } from './componente';

@Injectable()
export class CCAService {
    getComponenti() {
        return Promise.resolve([
            <Componente>{ Anno: 2016, Mese: 1, Fascia: "F0", Valore: 2.5, IDFascia: 0 },
            <Componente>{ Anno: 2016, Mese: 1, Fascia: "F1", Valore: 7.41, IDFascia: 1 },
            <Componente>{ Anno: 2016, Mese: 1, Fascia: "F2", Valore: 3.68, IDFascia: 2 },
            <Componente>{ Anno: 2016, Mese: 2, Fascia: "F0", Valore: 9.11, IDFascia: 0 },
            <Componente>{ Anno: 2016, Mese: 2, Fascia: "F1", Valore: 1.06, IDFascia: 1 },
            <Componente>{ Anno: 2016, Mese: 2, Fascia: "F2", Valore: 5.12, IDFascia: 2 }
        ]);
    }
}