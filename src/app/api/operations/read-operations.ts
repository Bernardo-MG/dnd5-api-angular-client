import { Observable } from 'rxjs';

export interface ReadOperations {

  fetch<T>(): Observable<T>;

  route(url: string): ReadOperations;

  parameter(name: string, value: any): ReadOperations;

}
