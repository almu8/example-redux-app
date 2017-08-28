import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import * as _ from "lodash";

import {ERROR_ACTION_NAMES, CITY_ACTION_NAMES} from "../actions";
import {City} from "../../models/city";
import {getCitiesUrl} from "../../http/urls";

@Injectable()
export class CityEpic {
  constructor(private http: Http) {}

  public getCities = (action$: any) => {

    return action$.ofType(CITY_ACTION_NAMES.LOAD_CITIES)
      .switchMap(({ payload }) => this.http.get(getCitiesUrl, {params: {countryId: payload}}).catch(this.handleError))
      .map((res: any) => res.json())
      .flatMap(this.handleCitiesLoad);
  };

  private handleCitiesLoad(cities: City[]) {

    return Observable.from([
      {
        type: CITY_ACTION_NAMES.SET_CITIES,
        payload: cities
      }
    ])
  }

  private handleError(err: Error) {
    return Observable.of({
      type: ERROR_ACTION_NAMES.SET_ERROR,
      payload: {
        url: getCitiesUrl,
        details: err
      }
    })
  }
}
