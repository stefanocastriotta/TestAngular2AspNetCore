"use strict";
/// <reference path="../typings/globals/es6-promise/index.d.ts" />
/// <reference path="../typings/globals/es6-collections/index.d.ts" />
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var variables_1 = require('./variables');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, core_1.provide(variables_1.BASEURL, { useValue: baseUrl })]);
//# sourceMappingURL=main.js.map