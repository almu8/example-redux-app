import {Injectable} from "@angular/core";
import {dispatch} from "@angular-redux/store";

import {CITY_ACTION_NAMES} from "../actions";

@Injectable()
export class CityAction {
  @dispatch()
  public loadCities = (countryId: number): any => ({ type: CITY_ACTION_NAMES.LOAD_CITIES, payload: countryId });
}
