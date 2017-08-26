import {Observable, Subscription} from "rxjs";
import {select} from "@angular-redux/store";
import {Injectable} from "@angular/core";
import {Request} from "@angular/http";
import * as _ from "lodash";

import {RequestFilter} from "./request-fulter";
import {Project} from "../../models/project";
import {getParamFromUrl} from "./url-util";
import {getProjectUrl} from "../urls";


@Injectable()
export class FilterGetProject extends RequestFilter {
  @select(['project'])
  private readonly projects$: Observable<Project[]>;

  private subscription: Subscription;

  doCheck(url: Request): boolean {
    let result: boolean = false;

    if(_.includes(url.url, getProjectUrl)) {
      let contactId = getParamFromUrl(url.url, "id");

      this.subscription = new Subscription();
      this.subscription.add(this.projects$.subscribe(projects => {
        result = !!_.find(projects, project => project.id === contactId);
        this.subscription.unsubscribe();
      }));
    }

    return result;
  }

}
