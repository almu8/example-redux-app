import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { provideReduxForms } from '@angular-redux/form';
import { createLogger } from 'redux-logger';

import { rootReducer } from './reducers';
import { RootEpics } from './epics';
import {ProjectEpic} from "./epic/project-epic";
import {ContactEpic} from "./epic/contact-epic";
import {WorkerEpic} from "./epic/worker-epic";
import {CountryEpic} from "./epic/country-epic";
import {CityEpic} from "./epic/city-epic";
import {ProjectResolver} from "../http/resolver/project-resolver";
import {WorkerResolver} from "../http/resolver/worker-resolver";
import {ProjectListResolver} from "../http/resolver/project-list-resolver";


@NgModule({
  imports: [NgReduxModule, NgReduxRouterModule],
  providers: [
    RootEpics,
    ProjectEpic,
    ContactEpic,
    WorkerEpic,
    CountryEpic,
    CityEpic,
    ProjectResolver,
    WorkerResolver,
    ProjectListResolver
  ]
})
export class StoreModule {
  constructor(
    public store: NgRedux<any>,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter,
    rootEpics: RootEpics,
  ) {
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    store.configureStore(
      rootReducer,
      {},
      [ createLogger(), ...rootEpics.createEpics() ],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);

    // Enable syncing of Angular router state with our Redux store.
    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }

    // Enable syncing of Angular form state with our Redux store.
    provideReduxForms(store);
  }
}
