import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';

// This app's ngModules
import { StoreModule } from './store/module';

// Top-level app component constructs.
import { appRoutes } from './routes';
import { AppComponent } from './component';
import {ProjectModule} from "./project/project-module";
import {InterceptedHttp} from "./http/intercepter-http";
import {FilterModule} from "./http/filter-module";

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
    FilterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
