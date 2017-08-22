import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import { WorkerListCmp } from './worker-list/worker-list-cmp';
import {WorkerCmp} from "./worker/worker-cmp";
import {ContactService} from "../store/service/contact-service";
import {WorkerService} from "../store/service/worker-service";
import {ContactAction} from "../store/action/contact-action";


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WorkerListCmp, WorkerCmp],
  providers: [WorkerService, ContactService, ContactAction],
  exports: [WorkerListCmp, WorkerCmp],
})
export class WorkerModule {}
