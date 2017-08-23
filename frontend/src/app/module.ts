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
import {InterceptedHttp} from "./interceptor/Intercepter-http";

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
      useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions) => new InterceptedHttp(xhrBackend, requestOptions),
      deps: [XHRBackend, RequestOptions]
    }
  ]
})
export class AppModule {}
