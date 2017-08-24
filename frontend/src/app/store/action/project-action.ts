import {Injectable} from "@angular/core";
import {dispatch} from "@angular-redux/store";

import {PROJECT_ACTION_NAMES} from "../actions";

@Injectable()
export class ProjectAction {
  @dispatch()
  public loadProjects = (): any => ({ type: PROJECT_ACTION_NAMES.LOAD_PROJECTS });
  @dispatch()
  public loadProject = (id: number): any => ({ type: PROJECT_ACTION_NAMES.LOAD_PROJECT, payload: id });
}
