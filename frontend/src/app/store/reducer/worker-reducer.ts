import * as _ from "lodash";

import {WORKER_ACTION_NAMES} from "../actions";

const INITIAL_STATE = [];

export function workerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case WORKER_ACTION_NAMES.SET_WORKERS:
      state.push(...action.payload);

      return _.uniqBy(state, 'id');
    default:
      return state;
  }
}
