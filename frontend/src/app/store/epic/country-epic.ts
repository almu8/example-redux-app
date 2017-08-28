import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import * as _ from "lodash";

import {ERROR_ACTION_NAMES, COUNTRY_ACTION_NAMES} from "../actions";
import {Country} from "../../models/country";
import {getCountriesUrl} from "../../http/urls";

@Injectable()
export class CountryEpic {
  constructor(private http: Http) {}

  public getCountries = (action$: any) => {

    return action$.ofType(COUNTRY_ACTION_NAMES.LOAD_COUNTRIES)
      .switchMap(() => this.http.get(getCountriesUrl).catch(this.handleError))
      .map((res: any) => res.json())
      .flatMap(this.handleCountriesLoad);
  };

  private handleCountriesLoad(countries: Country[]) {

    return Observable.from([
      {
        type: COUNTRY_ACTION_NAMES.SET_COUNTRIES,
        payload: countries
      }
    ])
  }

  private handleError(err: Error) {
    return Observable.of({
      type: ERROR_ACTION_NAMES.SET_ERROR,
      payload: {
        url: getCountriesUrl,
        details: err
      }
    })
  }
}
