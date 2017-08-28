import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Project} from "../../models/project";
import {ProjectAction} from "../../store/action/project-action";
import {CountryAction} from "../../store/action/country-action";

@Injectable()
export class ProjectListResolver implements Resolve<Project> {
  constructor(private projectAction: ProjectAction, private countryAction: CountryAction) {
  }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    this.projectAction.loadProjects();
    this.countryAction.loadCountries();

    return null;
  }
}
