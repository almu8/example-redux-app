import {Component, ChangeDetectionStrategy, Input, SimpleChanges, OnChanges} from '@angular/core';
import { select, select$ } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import * as _ from "lodash";

import {Worker} from "../../models/worker";
import {WorkerService} from "../../store/service/worker-service";


@Component({
  selector: "worker-list",
  templateUrl: './worker-list-cmp.html'
})
export class WorkerListCmp {
  @Input() public workers: number[] = [];

  public workersList$: Observable<Worker[]>;

  public constructor(private workerService: WorkerService) {}

  public ngOnChanges() {
    this.workersList$ = this.workerService.getWorkersByIds(this.workers);
  }
}
