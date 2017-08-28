import * as _ from "lodash";

import {CITY_ACTION_NAMES} from "../actions";

const INITIAL_STATE = [];

export function cityReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CITY_ACTION_NAMES.SET_CITIES:
      state.push(...action.payload);

      return _.uniqBy(state, 'id');
    default:
      return state;
  }
}
