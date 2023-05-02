import { Injectable } from '@angular/core';
import { AngularDnd5ApiClient } from '@app/core/api/client/angular-dnd5-api-client';
import { ReferenceList } from '@app/core/api/models/reference-list';
import { Charclass } from '@app/dnd5/models/charclass/charclass';
import { Level } from '@app/dnd5/models/charclass/level';
import { Proficiency } from '@app/dnd5/models/charclass/proficiency';
import { Reference } from '@app/dnd5/models/info/reference';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CharclassService {

  constructor(
    private client: AngularDnd5ApiClient
  ) { }

  public getCharacterClasses(): Observable<Reference[]> {
    return this.client.characterClass().getAll().pipe(
      map((response: ReferenceList) => { return response.results })
    );
  }

  public getCharacterClass(id: string): Observable<Charclass> {
    return this.client.characterClass().index(id).getOne();
  }

  public getLevels(id: string): Observable<Level[]> {
    return this.client.characterClass().index(id).levels().getAll();
  }

  public getProficiencies(refs: Reference[]): Observable<Proficiency[]> {
    const observables = refs.map(r => this.client.proficiency().index(r.index).getOne());
    
    return forkJoin(observables);
  }

}
