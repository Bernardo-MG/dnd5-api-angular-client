import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiResponse } from '../models/api-response';

export class ReadOperations<T> {

  protected options: {
    params?: HttpParams
  } = {};

  constructor(
    private http: HttpClient,
    private queryUrl: string
  ) { }

  public fetch(): Observable<ApiResponse<T[]>> {
    return this.http.get<ApiResponse<T[]>>(this.queryUrl, this.options)
      .pipe(
        catchError(this.handleError())
      );
  }

  public fetchOne(): Observable<T> {
    return this.http.get<T>(this.queryUrl, this.options)
      .pipe(
        catchError(this.handleError())
      );
  }

  public parameter(name: string, value: any): ReadOperations<T> {
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
