import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {select} from "@angular-redux/store";
import * as _ from "lodash";

import {Contact} from "../../models/contact";

@Injectable()
export class ContactService {
  @select(['contact'])
  private readonly contacts$: Observable<Contact[]>;

  public getContacts(): Observable<Contact[]> {
    return this.contacts$;
  }

  public getContactById(id: number): Observable<Contact> {
    return this.contacts$.map(contacts => _.find(contacts, c => c.id === id));
  }
}
