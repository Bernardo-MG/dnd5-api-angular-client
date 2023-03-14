import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';

export interface ReadOperations {

  fetch<T>(url: string): Observable<ApiResponse<T[]>>;

  fetchOne<T>(url: string): Observable<T>;

  parameter(name: string, value: any): ReadOperations;

}
