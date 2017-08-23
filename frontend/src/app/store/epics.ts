import { Injectable } from '@angular/core';

import {ProjectEpic} from "./epic/project-epic";
import {createEpicMiddleware} from "redux-observable";
import {ContactEpic} from "./epic/contact-epic";
import {WorkerEpic} from "./epic/worker-epic";

@Injectable()
export class RootEpics {
  constructor(private projectEpic: ProjectEpic,
              private workerEpic: WorkerEpic,
              private contactEpic: ContactEpic) {}

  public createEpics() {
    return [
      createEpicMiddleware(this.projectEpic.getProjects),
      createEpicMiddleware(this.contactEpic.getContact),
      createEpicMiddleware(this.workerEpic.getWorker)
    ];
  }
}
