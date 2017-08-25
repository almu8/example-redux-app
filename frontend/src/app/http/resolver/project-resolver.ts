import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Project} from "../../models/project";
import {ProjectAction} from "../../store/action/project-action";
import {WorkerAction} from "../../store/action/worker-action";

@Injectable()
export class ProjectResolver implements Resolve<Project> {
  constructor(private projectAction: ProjectAction,
              private workerAction: WorkerAction) {
  }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    let projectId = +(route.paramMap.get('id') || 1);

    this.projectAction.loadProject(projectId);
    this.workerAction.loadWorkers(projectId);

    return null;
  }
}
