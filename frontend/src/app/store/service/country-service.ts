import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {select} from "@angular-redux/store";
import * as _ from "lodash";

import {Country} from "../../models/country";

@Injectable()
export class CountryService {
  @select(['country'])
  private readonly countries$: Observable<Country[]>;

  public getCountries(): Observable<Country[]> {
    return this.countries$;
  }

  public getCountryById(id: number): Observable<Country> {
    return this.countries$.map(countries => <Country>_.find(countries, c => c.id === id));
  }
}
