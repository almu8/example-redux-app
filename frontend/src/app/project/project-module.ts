import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import { ProjectCmp } from './project/project-cmp';
import {WorkerModule} from "../worker/worker-module";
import {ProjectAction} from "../store/action/project-action";
import {ProjectService} from "../store/service/project-service";
import {ProjectListCmp} from "./project-list/project-list-cmp";

@NgModule({
  declarations: [ProjectCmp, ProjectListCmp],
  providers: [ProjectAction, ProjectService],
  exports: [ProjectCmp, ProjectListCmp],
  imports: [CommonModule, WorkerModule, RouterModule],
})
export class ProjectModule {}
