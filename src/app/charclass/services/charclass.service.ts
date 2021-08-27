import { Injectable } from '@angular/core';
import { Charclass } from '@app/charclass/models/charclass';
import { ApiResponse } from '@app/charclass/models/api-response';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable()
export class CharclassService {

  private charclassesUrl = environment.apiUrl;  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  getCharClasses(): Observable<Charclass[]> {
    return this.http.get<ApiResponse<Charclass[]>>(this.charclassesUrl).pipe(
      map((response: ApiResponse<Charclass[]>) => { return response.results }),
      catchError(this.handleError<Charclass[]>('getCharClasses', []))
    ).pipe(
      catchError(this.handleError<Charclass[]>('getCharClasses', []))
    );
  }

  getCharClass(id: string): Observable<Charclass> {
    const url = `${this.charclassesUrl}/${id}`;
    return this.http.get<Charclass>(url);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
