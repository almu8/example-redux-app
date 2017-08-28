import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {select} from "@angular-redux/store";
import * as _ from "lodash";

import {Project} from "../../models/project";

@Injectable()
export class ProjectService {
  @select(['project'])
  private readonly projects$: Observable<Project[]>;

  public getProjects(): Observable<Project[]> {
    return this.projects$;
  }

  public getProjectById(id: number): Observable<Project> {
    return this.projects$.map(projects => <Project>_.find(projects, p => p.id === id));
  }
}
