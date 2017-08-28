import * as _ from "lodash";

import {COUNTRY_ACTION_NAMES} from "../actions";

const INITIAL_STATE = [];

export function countryReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COUNTRY_ACTION_NAMES.SET_COUNTRIES:
      state.push(...action.payload);

      return _.uniqBy(state, 'id');
    default:
      return state;
  }
}
