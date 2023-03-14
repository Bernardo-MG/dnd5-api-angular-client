import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';

export interface ReadOperations {

  fetch<T>(): Observable<ApiResponse<T[]>>;

  fetchOne<T>(): Observable<T>;
  
  url(url: string): ReadOperations;

  parameter(name: string, value: any): ReadOperations;

}
