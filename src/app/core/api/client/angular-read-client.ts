import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ReadClient } from './read-client';

export class AngularReadClient implements ReadClient {

  constructor(
    private readonly http: HttpClient,
    private readonly route: string,
    private readonly options: { params?: HttpParams } = {}
  ) { }

  public read<T>(): Observable<T> {
    return this.http.get<T>(this.route, this.options)
      .pipe(
        catchError(this.handleError())
      );
  }

  public parameter(name: string, value: string | number | boolean | undefined): AngularReadClient {
    let params = this.getHttpParams();

    if (value !== undefined && value !== null) {
      params = params.append(name, value);
    }

    return new AngularReadClient(this.http, this.route, { ...this.options, params: params });
  }

  public appendRoute(route: string): AngularReadClient {
    return new AngularReadClient(this.http, `${this.route}${route}`, { ...this.options });
  }

  private getHttpParams(): HttpParams {
    return this.options.params || new HttpParams();
  }

  private handleError() {
    return (error: HttpErrorResponse) => {

      console.error(error.message);

      throw new Error(error.message);
    };
  }

}
