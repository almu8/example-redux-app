import {Request} from "@angular/http";

export abstract class RequestFilter {
  public abstract doCheck(url: Request): boolean;
}
