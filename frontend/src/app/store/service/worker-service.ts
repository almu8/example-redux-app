import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {select} from "@angular-redux/store";
import * as _ from "lodash";

import {Worker} from "../../models/worker";

@Injectable()
export class WorkerService {

  @select(['worker'])
  private readonly workers$: Observable<Worker[]>;

  public getWorkers(): Observable<Worker[]> {
    return this.workers$;
  }

  public getWorkerById(id: number): Observable<Worker> {
    return this.workers$.map(workers => _.find(workers, (w: Worker) => w.id === id));
  }

  public getWorkersByIds(ids: number[] = []): Observable<Worker[]> {
    return this.workers$.map(workers => _.filter(workers, (w: Worker) => _.includes(ids, w.id)));
  }
}
