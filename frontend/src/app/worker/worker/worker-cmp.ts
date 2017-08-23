import {Component, ChangeDetectionStrategy, Input, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import { select, select$ } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import * as _ from "lodash";

import {Worker} from "../../models/worker";
import {Contact} from "../../models/contact";
import {WorkerService} from "../../store/service/worker-service";
import {ContactService} from "../../store/service/contact-service";
import {ContactAction} from "../../store/action/contact-action";


@Component({
  templateUrl: './worker-cmp.html'
})
export class WorkerCmp {

  public contact: Contact;
  public worker: Worker;

  private workerId: number;
  private subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
              private workerService: WorkerService,
              private contactService: ContactService,
              private contactAction: ContactAction) {
  }

  public ngOnInit(){
    this.workerId = +(this.route.snapshot.paramMap.get('id') || 1);

    this.subscription.add(this.workerService
      .getWorkerById(this.workerId)
      .filter(worker => !_.isEmpty(worker))
      .switchMap((worker: Worker) => {
        this.worker = worker;

        return this.contactService.getContactById(worker.id);
      })
      .subscribe((contact: Contact) => {
        console.log("contact " + contact);
        this.contact = contact;
      }));
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public click() {
    console.log("!!!!!!!!!!" + JSON.stringify(this.contact));
  }
}
