import {Injectable} from "@angular/core";
import {dispatch} from "@angular-redux/store";

import {COUNTRY_ACTION_NAMES} from "../actions";

@Injectable()
export class CountryAction {
  @dispatch()
  public loadCountries = (): any => ({ type: COUNTRY_ACTION_NAMES.LOAD_COUNTRIES });
}
