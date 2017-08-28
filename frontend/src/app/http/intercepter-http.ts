import {Injectable} from "@angular/core";
import {
  ConnectionBackend,
  RequestOptions,
  Request,
  RequestOptionsArgs,
  Response,
  Http,
  RequestMethod
} from "@angular/http";
import {Observable} from "rxjs";
import * as _ from "lodash";

import {RequestFilter} from "./filter/request-fulter";

@Injectable()
export class InterceptedHttp extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions,
              private requestFilters: RequestFilter[]) {
    super(backend, defaultOptions);
  }

  private cache: Request[] = [];

  request(url: Request, options?: RequestOptionsArgs): Observable<Response> {
    let needToBeCached: boolean = url.method === RequestMethod.Get;

    if (needToBeCached && _.find(this.cache, url)) {
      return Observable.empty();
    }

    let filterCanceledRequest = _.some(this.requestFilters, filter => filter.doCheck(url));

    if (filterCanceledRequest) {
      return Observable.empty();
    }

    return super.request(url, options)
      .do((res) => needToBeCached && res.status === 200 ? this.cache.push(url) : null);
  }
}
