import { Observable } from 'rxjs';

export interface ReadOperations {

  fetch<T>(): Observable<T>;

  url(url: string): ReadOperations;

  parameter(name: string, value: any): ReadOperations;

}
