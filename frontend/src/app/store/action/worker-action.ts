import {Injectable} from "@angular/core";
import {dispatch} from "@angular-redux/store";

import {WORKER_ACTION_NAMES} from "../actions";

@Injectable()
export class WorkerAction {
  @dispatch()
  public loadWorker = (id: number): any => ({ type: WORKER_ACTION_NAMES.LOAD_WORKER, payload: id });
  @dispatch()
  public loadWorkers = (projId: number): any => ({ type: WORKER_ACTION_NAMES.LOAD_WORKERS, payload: projId });
}
