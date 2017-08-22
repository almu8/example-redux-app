import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Project} from "../../models/project";

@Injectable()
export class ProjectResolver implements Resolve<Project> {
  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    console.log("do do do od resolve");

    return null;
  }
}
