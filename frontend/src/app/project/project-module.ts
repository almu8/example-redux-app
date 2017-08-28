import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";


import { ProjectCmp } from './project/project-cmp';
import {ProjectListCmp} from "./project-list/project-list-cmp";
import {CountryListCmp} from "./country-list/country-list-cmp";
import {WorkerModule} from "../worker/worker-module";
import {ProjectAction} from "../store/action/project-action";
import {CountryAction} from "../store/action/country-action";
import {CityAction} from "../store/action/city-action";
import {ProjectService} from "../store/service/project-service";
import {CountryService} from "../store/service/country-service";
import {CityService} from "../store/service/city-service";

@NgModule({
  declarations: [ProjectCmp, ProjectListCmp, CountryListCmp],
  providers: [ProjectAction, CountryAction, CityAction, ProjectService, CountryService, CityService],
  exports: [ProjectCmp, ProjectListCmp],
  imports: [FormsModule, CommonModule, WorkerModule, RouterModule],
})
export class ProjectModule {}
