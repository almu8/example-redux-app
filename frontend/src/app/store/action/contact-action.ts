import {Injectable} from "@angular/core";
import {dispatch} from "@angular-redux/store";

import {CONTACT_ACTION_NAMES} from "../actions";

@Injectable()
export class ContactAction {
  @dispatch()
  public loadContact = (id: number): any => ({ type: CONTACT_ACTION_NAMES.LOAD_CONTACT, payload: id });
}
