import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { AngularDnd5ApiClient } from '../../core/api/client/angular-dnd5-api-client';
import { ReferenceList } from '../../core/api/models/reference-list';
import { Charclass } from '../models/charclass/charclass';
import { Level } from '../models/charclass/level';
import { Proficiency } from '../models/charclass/proficiency';
import { Reference } from '../models/info/reference';

@Injectable({
  providedIn: 'root'
})
export class CharclassService {

  constructor(
    private readonly client: AngularDnd5ApiClient
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
