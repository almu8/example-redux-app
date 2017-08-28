import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Country} from "../../models/country";
import {City} from "../../models/city";
import {CountryService} from "../../store/service/country-service";
import {CityAction} from "../../store/action/city-action";
import {CityService} from "../../store/service/city-service";


@Component({
  selector: 'country-list',
  templateUrl: './country-list-cmp.html'
})
export class CountryListCmp implements OnInit {
  public countries$: Observable<Country[]>;
  public cities$: Observable<City[]>;
  public qwe: string;

  constructor(private countryService: CountryService,
              private cityService: CityService,
              private cityAction: CityAction) {
  }

  public ngOnInit() {
    this.countries$ = this.countryService.getCountries();
  }

  public countryChange(countryId: number) {
    if (countryId) {
      this.cityAction.loadCities(countryId);
      this.cities$ = this.cityService.getCities(countryId)
    } else {
      this.cities$ = null;
    }
  }
}
