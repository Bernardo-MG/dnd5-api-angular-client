import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { AngularDnd5ApiRepository } from '../../core/api/client/angular-dnd5-api-repository';
import { ReferenceList } from '../../core/api/models/reference-list';
import { Charclass } from '../../core/api/models/charclass/charclass';
import { Level } from '../../core/api/models/charclass/level';
import { Proficiency } from '../../core/api/models/charclass/proficiency';
import { Reference } from '../../core/api/models/info/reference';

@Injectable({
  providedIn: 'root'
})
export class CharclassService {

  constructor(
    private readonly repository: AngularDnd5ApiRepository
  ) { }

  public getCharacterClasses(): Observable<Reference[]> {
    return this.repository.characterClass().getAll().pipe(
      map((response: ReferenceList) => { return response.results })
    );
  }

  public getCharacterClass(id: string): Observable<Charclass> {
    return this.repository.characterClass().index(id).getOne();
  }

  public getLevels(id: string): Observable<Level[]> {
    return this.repository.characterClass().index(id).levels().getAll();
  }

  public getProficiencies(ids: string[]): Observable<Proficiency[]> {
    const observables = ids.map(i => this.repository.proficiency().index(i).getOne());

    return forkJoin(observables);
  }

}
