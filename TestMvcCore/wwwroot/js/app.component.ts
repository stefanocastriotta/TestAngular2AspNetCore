import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { CCAService } from './cca.service';
import { CCAListComponent } from './cca-list.component';

@Component({
    selector: 'my-app',
    templateUrl: 'Home/Elenco',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        CCAService
    ]
})
@RouteConfig([
    {
        path: '/LoveBoat/ElencoCCA',
        name: 'CCA',
        component: CCAListComponent,
        useAsDefault: true
    }
])
export class AppComponent {
    title = 'Gestione componenti';
}