import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';

import {projectReducer} from "./reducer/project-reducer";
import {workerReducer} from "./reducer/worker-reducer";
import {errorReducer} from "./reducer/error-reducer";
import {contactReducer} from "./reducer/contact-reducer";
import {countryReducer} from "./reducer/country-reducer";
import {cityReducer} from "./reducer/city-reducer";

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    project: projectReducer,
    country: countryReducer,
    city: cityReducer,
    worker: workerReducer,
    contact: contactReducer,
    error: errorReducer,
    router: routerReducer,
  }));
