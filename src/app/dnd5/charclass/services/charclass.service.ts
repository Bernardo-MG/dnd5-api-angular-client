import { Injectable } from '@angular/core';
import { AngularDnd5ApiClient } from '@app/api/client/angular/angular-dnd5-api-client';
import { ApiResponse } from '@app/api/models/api-response';
import { Charclass } from '@app/dnd5/models/charclass/charclass';
import { Reference } from '@app/dnd5/models/info/reference';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CharclassService {

  constructor(
    private client: AngularDnd5ApiClient
  ) { }

  getCharacterClasses(): Observable<Reference[]> {
    return this.client.characterClass().getAll().pipe(
      map((response: ApiResponse<Reference[]>) => { return response.results })
    );
  }

  getCharacterClass(id: string): Observable<Charclass> {
    return this.client.characterClass().getOne(id);
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
