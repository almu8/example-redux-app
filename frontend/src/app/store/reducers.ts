import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';

import {projectReducer} from "./reducer/project-reducer";
import {workerReducer} from "./reducer/workerReducer";
import {errorReducer} from "./reducer/error-reducer";
import {contactReducer} from "./reducer/contact-reducer";

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    project: projectReducer,
    worker: workerReducer,
    contact: contactReducer,
    error: errorReducer,
    router: routerReducer,
  }));
