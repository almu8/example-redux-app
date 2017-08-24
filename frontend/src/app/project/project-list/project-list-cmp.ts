import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Project} from "../../models/project";
import {ProjectService} from "../../store/service/project-service";



@Component({
  templateUrl: './project-list-cmp.html'
})
export class ProjectListCmp implements OnInit {
  public projects$: Observable<Project[]>;

  constructor(private projectService: ProjectService) {
  }

  public ngOnInit() {
    this.projects$ = this.projectService.getProjects();
  }
}
