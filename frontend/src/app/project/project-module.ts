import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCmp } from './project-cmp';
import {WorkerModule} from "../worker/worker-module";
import {ProjectAction} from "../store/action/project-action";
import {ProjectService} from "../store/service/project-service";
// import { StoreModule } from '../../store/module';

@NgModule({
  declarations: [ProjectCmp],
  providers: [ProjectAction, ProjectService],
  exports: [ProjectCmp],
  imports: [/*StoreModule,*/ CommonModule, WorkerModule],
})
export class ProjectModule {}
