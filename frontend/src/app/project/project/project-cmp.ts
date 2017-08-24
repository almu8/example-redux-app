import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
import {Subscription} from "rxjs/Subscription";

import {Project} from "../../models/project";
import {ProjectService} from "../../store/service/project-service";



@Component({
  templateUrl: './project-cmp.html'
})
export class ProjectCmp implements OnInit, OnDestroy {
  private projectId: number;

  public project: Project;

  private subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
              private http: Http,
              private projectService: ProjectService) {
  }

  public ngOnInit() {
    this.projectId = +(this.route.snapshot.paramMap.get('id') || 1);

    this.subscription.add(this.projectService
      .getProjectById(this.projectId)
      .subscribe((project: Project) => this.project = project));
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public approve() {
    console.log("approved project " + this.projectId);

    this.http.post("http://localhost:3000/approve",  null)
      .forEach(() => {});
  }
}
