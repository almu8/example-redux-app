import * as _ from "lodash";

import {PROJECT_ACTION_NAMES} from "../actions";

const INITIAL_STATE = [];

export function projectReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PROJECT_ACTION_NAMES.SET_PROJECTS:
      state.push(...action.payload);

      return _.uniqBy(state, 'id');
    default:
      return state;
  }
}
