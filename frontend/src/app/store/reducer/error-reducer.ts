import {ERROR_ACTION_NAMES} from "../actions";
import * as _ from "lodash";

const INITIAL_STATE = [];

export function errorReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ERROR_ACTION_NAMES.SET_ERROR:
      _.remove(state, item => item.url == action.payload.url)

      return state.push(action.payload);
    default:
      return state;
  }
}
