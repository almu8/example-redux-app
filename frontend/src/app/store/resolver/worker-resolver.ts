import {Injectable} from "@angular/core";
import {Observable, Subscription} from "rxjs";
import * as _ from "lodash";

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Worker} from "../../models/worker";
import {ContactAction} from "../action/contact-action";
import {WorkerService} from "../service/worker-service";
import {WorkerAction} from "../action/worker-action";

@Injectable()
export class WorkerResolver implements Resolve<Worker> {
  constructor(private contactAction: ContactAction,
              private workerAction: WorkerAction,
              private workerService: WorkerService) {
  }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    let workerId = +(route.paramMap.get('id') || 1);

    this.workerAction.loadWorker(workerId);

    let subscription: Subscription = new Subscription();
    subscription.add(this.workerService
      .getWorkerById(workerId)
      .filter(worker => !_.isEmpty(worker)) //TODO what will happen if the worker does not come at once, but comes later ????
      .do((worker: Worker) => {
        if (worker.contactId) {
          this.contactAction.loadContact(worker.contactId);
        }
      })
      .subscribe(() => subscription.unsubscribe())
    );

    return null;
  }
}
