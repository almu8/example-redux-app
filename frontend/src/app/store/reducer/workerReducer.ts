import {WORKER_ACTION_NAMES} from "../actions";

const INITIAL_STATE = [];

export function workerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case WORKER_ACTION_NAMES.SET_WORKERS:
      return action.payload;
    default:
      return state;
  }
}
