import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import * as _ from "lodash";

import {CONTACT_ACTION_NAMES, ERROR_ACTION_NAMES, PROJECT_ACTION_NAMES, WORKER_ACTION_NAMES} from "../actions";
import {getWorkerUrl, getWorkersUrl} from "../../urls";
import {Contact} from "../../models/contact";
import {Worker} from "../../models/worker";

@Injectable()
export class WorkerEpic {
  constructor(private http: Http) {}

  public getWorker = (action$: any) => {

    return action$.ofType(WORKER_ACTION_NAMES.LOAD_WORKER)
      .switchMap(({ payload }) => this.http.get(getWorkerUrl, {params: {id: payload}}).catch(this.handleError))
      .map((res: any) => res.json())
      .flatMap(this.handleWorkerLoad);
  };

  public getWorkers = (action$: any) => {

    return action$.ofType(WORKER_ACTION_NAMES.LOAD_WORKERS)
      .switchMap(({ payload }) => this.http.get(getWorkersUrl, {params: {projId: payload}}).catch(this.handleError))
      .map((res: any) => res.json())
      .flatMap(this.handleWorkersLoad);
  };

  private handleWorkersLoad(workers: Worker[]) {
    return Observable.from([
      {
        type: WORKER_ACTION_NAMES.SET_WORKERS,
        payload: workers
      }
    ])
  }

  private handleWorkerLoad(worker: Worker) {
    let contact: Contact = worker.contact;
    delete worker.contact;

    return Observable.from([
      {
        type: WORKER_ACTION_NAMES.SET_WORKERS,
        payload: [worker]
      },
      {
        type: CONTACT_ACTION_NAMES.SET_CONTACTS,
        payload: [contact]
      }
    ])
  }

  private handleError(err: Error) {
    return Observable.of({
      type: ERROR_ACTION_NAMES.SET_ERROR,
      payload: { url: getWorkerUrl, details: err }
    })
  }
}
