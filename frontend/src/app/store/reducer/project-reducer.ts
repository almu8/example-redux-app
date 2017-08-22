import {PROJECT_ACTION_NAMES} from "../actions";

const INITIAL_STATE = [];

export function projectReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PROJECT_ACTION_NAMES.SET_PROJECTS:
      return action.payload;
    default:
      return state;
  }
}
