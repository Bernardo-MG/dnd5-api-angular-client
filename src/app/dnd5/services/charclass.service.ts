import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { AngularDnd5Api } from '../../core/api/client/angular-dnd5-api';
import { ReferenceList } from '../../core/api/models/reference-list';
import { CharacterClassSummary } from '../models/character-class-summary';
import { Charclass } from '../models/charclass';
import { Level } from '../models/level';
import { LevelFeature } from '../models/level-feature';
import { Proficiency } from '../models/proficiency';
import { SpellcastingLevels } from '../models/spellcasting-levels';

@Injectable({
  providedIn: 'root'
})
export class CharclassService {

  constructor(
    private readonly repository: AngularDnd5Api
  ) { }

  public getCharacterClassList(): Observable<CharacterClassSummary[]> {
    return this.repository.characterClass().getAll().pipe(
      map((response: ReferenceList) => { return response.results.map(r => new CharacterClassSummary(r.index, r.name)) })
    );
  }

  public getCharacterClass(id: string): Observable<Charclass> {
    return this.repository.characterClass().index(id).getOne().pipe(
      map(c => this.toCharclass(c)),
      switchMap(charclass => {
        const profIds = charclass.proficiencies.map(p => p.index);
        return forkJoin({
          proficiencies: this.getProficiencies(profIds),
          levels: this.getLevels(id)
        }).pipe(
          map(({ proficiencies, levels }) => {
            charclass.proficiencies = proficiencies;
            charclass.levels = levels;
            return charclass;
          })
        );
      })
    );
  }

  private getLevels(id: string): Observable<Level[]> {
    return this.repository.characterClass().index(id).levels().getAll().pipe(map(ls => ls.map(l => new Level(l.level, l.prof_bonus, l.features.map(f => new LevelFeature(f.name)), this.toSpellcastingLevels(l.spellcasting)))));
  }

  private getProficiencies(ids: string[]): Observable<Proficiency[]> {
    const observables = ids.map(i => this.repository.proficiency().index(i).getOne());

    return forkJoin(observables).pipe(map(ps => ps.map(p => new Proficiency(p.reference.name, p.type))));
  }

  private toSpellcastingLevels(source: any): SpellcastingLevels | undefined {
    let result: SpellcastingLevels | undefined;

    if (source) {
      result = new SpellcastingLevels(source.cantrips_known, source.spells_known, source.spell_slots_level_1, source.spell_slots_level_2, source.spell_slots_level_3, source.spell_slots_level_4, source.spell_slots_level_5, source.spell_slots_level_6, source.spell_slots_level_7, source.spell_slots_level_8, source.spell_slots_level_9);
    } else {
      result = undefined;
    }

    return result;
  }

  private toCharclass(data: any): Charclass {
    return new Charclass(
      data.name,
      data.hit_die,
      data.starting_equipment,
      data.starting_equipment_options,
      data.proficiency_choices,
      data.proficiencies
    );
  }

}
