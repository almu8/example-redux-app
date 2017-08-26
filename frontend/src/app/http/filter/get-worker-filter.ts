import {Observable, Subscription} from "rxjs";
import {select} from "@angular-redux/store";
import {Injectable} from "@angular/core";
import {Request} from "@angular/http";
import * as _ from "lodash";

import {RequestFilter} from "./request-fulter";
import {Worker} from "../../models/worker";
import {getParamFromUrl} from "./url-util";
import {getWorkerUrl} from "../urls";


@Injectable()
export class FilterGetWorker extends RequestFilter {
  @select(['worker'])
  private readonly workers$: Observable<Worker[]>;

  private subscription: Subscription;

  doCheck(url: Request): boolean {
    let result: boolean = false;

    if(_.includes(url.url, getWorkerUrl)) {
      let contactId = getParamFromUrl(url.url, "id");

      this.subscription = new Subscription();
      this.subscription.add(this.workers$.subscribe(workers => {
        result = !!_.find(workers, worker => worker.id === contactId);
        this.subscription.unsubscribe();
      }));
    }

    return result;
  }

}
