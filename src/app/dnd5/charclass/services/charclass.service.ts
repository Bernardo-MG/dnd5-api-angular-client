import { Injectable } from '@angular/core';
import { AngularDnd5ApiClient } from '@app/api/client/angular/angular-dnd5-api-client';
import { ApiResponse } from '@app/api/models/api-response';
import { Charclass } from '@app/dnd5/models/charclass/charclass';
import { Reference } from '@app/dnd5/models/info/reference';
import { Observable } from 'rxjs';
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

}
