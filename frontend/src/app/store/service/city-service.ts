import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {select} from "@angular-redux/store";
import * as _ from "lodash";

import {City} from "../../models/city";

@Injectable()
export class CityService {
  @select(['city'])
  private readonly cities$: Observable<City[]>;

  public getCities(countryId: number): Observable<City[]> {
    return this.cities$.map(cities => _.filter(cities, c => c.countryId == countryId));
  }

  public getCityById(id: number): Observable<City> {
    return this.cities$.map(cities => <City>_.find(cities, c => c.id === id));
  }
}
