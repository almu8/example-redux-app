import * as _ from "lodash";

import {CONTACT_ACTION_NAMES} from "../actions";

const INITIAL_STATE: any = [];

export function contactReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case CONTACT_ACTION_NAMES.SET_CONTACTS:
      state.push(...action.payload);

      return _.uniqBy(state, 'id');
    default:
      return state;
  }
}
