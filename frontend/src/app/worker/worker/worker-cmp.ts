import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import * as _ from "lodash";

import {Worker} from "../../models/worker";
import {Contact} from "../../models/contact";
import {WorkerService} from "../../store/service/worker-service";
import {ContactService} from "../../store/service/contact-service";


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
              private contactService: ContactService) {
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
        this.contact = contact;
      }));
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
