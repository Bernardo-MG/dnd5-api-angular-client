import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReadOperations } from "./read-operations";

@Injectable({
  providedIn: 'root'
})
export class RequestClient {

  constructor(
    private http: HttpClient
  ) { }

  public read<T>(url: string): ReadOperations<T> {
    return new ReadOperations<T>(this.http, url);
  }

}