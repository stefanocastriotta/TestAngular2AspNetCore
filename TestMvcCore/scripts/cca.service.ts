import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Componente } from './componente';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CCAService {

    constructor(private http: Http) { }

    getComponenti(): Promise<Componente[]> {
        
        return this.http.get('api/Values/GetComponenti')
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}