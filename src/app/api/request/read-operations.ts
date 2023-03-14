import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiResponse } from '../models/api-response';

export class ReadOperations {

  protected options: {
    params?: HttpParams
  } = {};

  constructor(
    private http: HttpClient
  ) { }

  public fetch<T>(url: string): Observable<ApiResponse<T[]>> {
    return this.http.get<ApiResponse<T[]>>(url, this.options)
      .pipe(
        catchError(this.handleError())
      );
  }

  public fetchOne<T>(url: string): Observable<T> {
    return this.http.get<T>(url, this.options)
      .pipe(
        catchError(this.handleError())
      );
  }

  public parameter(name: string, value: any): ReadOperations {
    let params: HttpParams;

    params = this.getHttpParams();

    params = params.append(name, value);

    this.options = { params: params };

    return this;
  }

  private getHttpParams(): HttpParams {
    let params: HttpParams;

    if (this.options.params) {
      params = this.options.params;
    } else {
      params = new HttpParams();
      this.options = { params: params };
    }

    return params;
  }

  private handleError() {
    return (error: HttpErrorResponse) => {

      console.error(error.message);

      throw new Error(error.message);
    };
  }

}
