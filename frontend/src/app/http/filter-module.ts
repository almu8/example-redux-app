import {Http, HttpModule, XHRBackend, RequestOptions} from "@angular/http";
import {NgReduxRouterModule} from "@angular-redux/router";
import {NgReduxModule} from "@angular-redux/store";
import {NgModule} from "@angular/core";

import {FilterGetContact} from "./filter/get-contract-filter";
import {InterceptedHttp} from "./intercepter-http";
import {RequestFilter} from "./filter/request-fulter";
import {FilterGetProject} from "./filter/get-project-filter";
import {FilterGetWorker} from "./filter/get-worker-filter";


@NgModule({
  imports: [
    HttpModule,
    NgReduxModule,
    NgReduxRouterModule,
  ],
  providers: [
    { provide: RequestFilter, useClass: FilterGetContact, multi: true },
    { provide: RequestFilter, useClass: FilterGetProject, multi: true },
    { provide: RequestFilter, useClass: FilterGetWorker, multi: true },
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, RequestFilter]
    },
  ]
})
export class FilterModule {}

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, requestFilters: RequestFilter[]) {
  return new InterceptedHttp(xhrBackend, requestOptions, requestFilters);
}
