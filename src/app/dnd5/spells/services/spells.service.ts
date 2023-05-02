import { Injectable } from '@angular/core';
import { AngularDnd5ApiClient } from '@app/core/api/client/angular-dnd5-api-client';
import { ReferenceList } from '@app/core/api/models/reference-list';
import { Reference } from '@app/dnd5/models/info/reference';
import { Observable, map } from 'rxjs';

@Injectable()
export class SpellsService {

  constructor(
    private client: AngularDnd5ApiClient
  ) { }

  public getSpells(): Observable<Reference[]> {
    return this.client.spell().getAll().pipe(
      map((response: ReferenceList) => { return response.results })
    );
  }

}
