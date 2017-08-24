import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import * as _ from "lodash";

import {ERROR_ACTION_NAMES, PROJECT_ACTION_NAMES, WORKER_ACTION_NAMES} from "../actions";
import {Project} from "../../models/project";
import {getProjectsUrl, getProjectUrl} from "../../urls";

@Injectable()
export class ProjectEpic {
  constructor(private http: Http) {}

  public getProjects = (action$: any) => {

    return action$.ofType(PROJECT_ACTION_NAMES.LOAD_PROJECTS)
      .switchMap(() => this.http.get(getProjectsUrl).catch(this.handleError))
      .map((res: any) => res.json())
      .flatMap(this.handleProjectsLoad);
  };

  public getProject = (action$: any) => {
    return action$.ofType(PROJECT_ACTION_NAMES.LOAD_PROJECT)
      .switchMap(({ payload }) => this.http.get(getProjectUrl, {params: {id: payload}}).catch(this.handleError))
      .map((res: any) => res.json())
      .flatMap(this.handleProjectLoad);
  };

  private handleProjectLoad(project: Project) {
    let workers = project.workers;
    project.workers = _.map(workers, w => w.id)

    return Observable.from([
      {
        type: WORKER_ACTION_NAMES.SET_WORKERS,
        payload: workers
      },
      {
        type: PROJECT_ACTION_NAMES.SET_PROJECTS,
        payload: [project]
      }
    ])
  }

  private handleProjectsLoad(projects: Project[]) {

    return Observable.from([
      {
        type: PROJECT_ACTION_NAMES.SET_PROJECTS,
        payload: projects
      }
    ])
  }

  private handleError(err: Error) {
    return Observable.of({
      type: ERROR_ACTION_NAMES.SET_ERROR,
      payload: {
        url: getProjectsUrl,
        details: err
      }
    })
  }
}
