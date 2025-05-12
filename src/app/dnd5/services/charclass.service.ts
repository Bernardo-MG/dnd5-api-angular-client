import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { AngularDnd5ApiRepository } from '../../core/api/client/angular-dnd5-api-repository';
import { Charclass } from '../../core/api/models/charclass/charclass';
import { Level } from '../../core/api/models/charclass/level';
import { ReferenceList } from '../../core/api/models/reference-list';
import { CharacterClassSummary } from '../models/character-class-summary';
import { Proficiency } from '../models/proficiency';

@Injectable({
  providedIn: 'root'
})
export class CharclassService {

  constructor(
    private readonly repository: AngularDnd5ApiRepository
  ) { }

  public getCharacterClassList(): Observable<CharacterClassSummary[]> {
    return this.repository.characterClass().getAll().pipe(
      map((response: ReferenceList) => { return response.results.map(r => new CharacterClassSummary(r.index, r.name)) })
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

    return forkJoin(observables).pipe(map(ps => ps.map(p => new Proficiency(p.reference.name, p.type))));
  }

}
