import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

declare var baseUrl: any;

import { AppComponent } from './app.component';
bootstrap(AppComponent, [HTTP_PROVIDERS]);