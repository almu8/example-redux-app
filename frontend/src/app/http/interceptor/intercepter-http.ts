import {Injectable} from "@angular/core";
import {
  ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http,
  RequestMethod
} from "@angular/http";
import {Observable} from "rxjs";
import * as _ from "lodash";

@Injectable()
export class InterceptedHttp extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  private cach: Request[] = [];

  request(url: Request, options?: RequestOptionsArgs): Observable<Response> {
    console.log("request method!!!!!!!!!!!");
    let needToBeCached: boolean = url.method === RequestMethod.Get;

    if (needToBeCached && _.find(this.cach, url)) {
      return Observable.empty();
    }

    return super.request(url, options)
      .do((res) => needToBeCached && res.status === 200 ? this.cach.push(url) : null);
  }
}
