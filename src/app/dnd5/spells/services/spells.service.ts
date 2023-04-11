import { Injectable } from '@angular/core';
import { AngularDnd5ApiClient } from '@app/dnd5/api/angular/client/angular-dnd5-api-client';
import { ReferenceList } from '@app/dnd5/api/models/reference-list';
import { Reference } from '@app/dnd5/models/info/reference';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
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
