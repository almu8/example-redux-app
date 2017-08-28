import { Injectable } from '@angular/core';

import {ProjectEpic} from "./epic/project-epic";
import {createEpicMiddleware} from "redux-observable";
import {ContactEpic} from "./epic/contact-epic";
import {WorkerEpic} from "./epic/worker-epic";
import {CountryEpic} from "./epic/country-epic";
import {CityEpic} from "./epic/city-epic";

@Injectable()
export class RootEpics {
  constructor(private projectEpic: ProjectEpic,
              private workerEpic: WorkerEpic,
              private countryEpic: CountryEpic,
              private cityEpic: CityEpic,
              private contactEpic: ContactEpic) {}

  public createEpics() {
    return [
      createEpicMiddleware(this.projectEpic.getProjects),
      createEpicMiddleware(this.projectEpic.getProject),
      createEpicMiddleware(this.contactEpic.getContact),
      createEpicMiddleware(this.workerEpic.getWorkers),
      createEpicMiddleware(this.workerEpic.getWorker),
      createEpicMiddleware(this.countryEpic.getCountries),
      createEpicMiddleware(this.cityEpic.getCities)
    ];
  }
}
