import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Project} from "../../models/project";
import {ProjectAction} from "../action/project-action";

@Injectable()
export class ProjectListResolver implements Resolve<Project> {
  constructor(private projectAction: ProjectAction) {
  }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    this.projectAction.loadProjects();

    return null;
  }
}
