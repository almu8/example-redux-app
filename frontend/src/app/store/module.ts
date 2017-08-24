import { NgModule } from '@angular/core';

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { provideReduxForms } from '@angular-redux/form';

// Redux ecosystem stuff.
import { createLogger } from 'redux-logger';

// The top-level reducers and epics that make up our app's logic.
import { rootReducer } from './reducers';
import { RootEpics } from './epics';
import {ProjectEpic} from "./epic/project-epic";
import {ContactEpic} from "./epic/contact-epic";
import {ProjectResolver} from "./resolver/project-resolver";
import {WorkerResolver} from "./resolver/worker-resolver";
import {WorkerEpic} from "./epic/worker-epic";
import {ProjectListResolver} from "./resolver/project-list-resolver";

@NgModule({
  imports: [NgReduxModule, NgReduxRouterModule],
  providers: [RootEpics, ProjectEpic, ContactEpic, ProjectResolver, WorkerResolver, WorkerEpic, ProjectListResolver],
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
