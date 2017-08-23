import {Injectable} from "@angular/core";
import {ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class InterceptedHttp extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    console.log("request method!!!!!!!!!!!");

    return super.request(url, options);
    // return Observable.empty();
  }
}
