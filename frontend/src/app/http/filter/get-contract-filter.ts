import {Request, URLSearchParams} from "@angular/http";
import {Injectable, OnInit} from "@angular/core";
import {Observable, Subscription} from "rxjs";
import {select} from "@angular-redux/store";
import * as _ from "lodash";

import {RequestFilter} from "./request-fulter";
import {Contact} from "../../models/contact";
import {getParamFromUrl} from "./url-util";
import {getContactUrl} from "../urls";

// export function filterGetContact(url: Request):boolean {
//  let params: ParamMap = router.parseUrl(url.url).queryParamMap;
// }

@Injectable()
export class FilterGetContact extends RequestFilter {
  @select(['contact'])
  private readonly contacts$: Observable<Contact[]>;

  private subscription: Subscription;

  doCheck(url: Request): boolean {
    let result: boolean = false;

    if(_.includes(url.url, getContactUrl)) {
      let contactId = getParamFromUrl(url.url, "id");

      this.subscription = new Subscription();
      this.subscription.add(this.contacts$.subscribe(contacts => { // .delay(1000)
        result = !!_.find(contacts, contact => contact.id === contactId);
        this.subscription.unsubscribe();
      }));
    }

    return result;
  }

}
