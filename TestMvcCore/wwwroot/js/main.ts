/// <reference path="../typings/globals/es6-promise/index.d.ts" />
/// <reference path="../typings/globals/es6-collections/index.d.ts" />
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { BASEURL } from './variables';
import { provide } from '@angular/core';

declare var baseUrl: string;

import { AppComponent } from './app.component';
bootstrap(AppComponent, [HTTP_PROVIDERS, provide(BASEURL, {useValue: baseUrl})]);