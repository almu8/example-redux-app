import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {Http, HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';

// This app's ngModules
import { StoreModule } from './store/module';

// Top-level app component constructs.
import { appRoutes } from './routes';
import { AppComponent } from './component';
import {ProjectModule} from "./project/project-module";
import {InterceptedHttp} from "./http/interceptor/intercepter-http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    NgReduxRouterModule,
    StoreModule,
    ProjectModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    }
  ]
})
export class AppModule {}

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions) {
  return new InterceptedHttp(xhrBackend, requestOptions);
}
