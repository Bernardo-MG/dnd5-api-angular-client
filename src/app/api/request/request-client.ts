import { HttpClient } from "@angular/common/http";
import { ReadOperations } from "./read-operations";

export class RequestClient {

  constructor(
    private http: HttpClient
  ) { }

  public read<T>(url: string): ReadOperations<T> {
    return new ReadOperations<T>(this.http, url);
  }

}