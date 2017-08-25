import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import * as _ from "lodash";

import {CONTACT_ACTION_NAMES, ERROR_ACTION_NAMES} from "../actions";
import {getContactUrl} from "../../http/urls";
import {Contact} from "../../models/contact";

@Injectable()
export class ContactEpic {
  constructor(private http: Http) {}

  public getContact = (action$: any) => {

    return action$.ofType(CONTACT_ACTION_NAMES.LOAD_CONTACT)
      .switchMap(({ payload }) => this.http.get(getContactUrl, {params: {id: payload}}).catch(this.handleError))
      .map((res: any) => res.json())
      .flatMap(this.handleContactLoad);
  };

  private handleContactLoad(contact: Contact) {
    return Observable.from([
      {
        type: CONTACT_ACTION_NAMES.SET_CONTACTS,
        payload: [contact]
      }
    ])
  }

  private handleError(err: Error) {
    return Observable.of({
      type: ERROR_ACTION_NAMES.SET_ERROR,
      payload: {
        url: getContactUrl,
        details: err
      }
    })
  }
}
