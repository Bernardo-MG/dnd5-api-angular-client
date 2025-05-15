import { Observable } from 'rxjs';

export interface ReadClient {

  read<T>(): Observable<T>;

  appendRoute(route: string): ReadClient;

  parameter(name: string, value: any): ReadClient;

}
