import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Level } from '@app/dnd5/models/level';
import { LevelFeature } from '@app/dnd5/models/level-feature';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'dnd5-levels',
  imports: [CommonModule, TableModule],
  templateUrl: './levels.component.html'
})
export class LevelsComponent {

  private _levels: Level[] = [];

  @Input() public set levels(data: Level[]) {
    this._levels = data;
    this.headers = [...this.commonHeader];

    this.spells = this.hasSpells(data);
    this.cantrips = this.hasCantrips(data);
    this.spellcaster = this.isSpellcaster(data);
    if ((this.spells) && (this.cantrips)) {
      this.headers.push(...this.mageHeader);
      this.headers.push(...this.clericHeader);
      this.headers.push(...this.spellsHeader);
      this.rows = this.levels.map(d => this.toSpellcasterRow(d));
    } else if (this.spells) {
      this.headers.push(...this.mageHeader);
      this.headers.push(...this.spellsHeader);
      this.rows = this.levels.map(d => this.toSpellsRow(d));
    } else if (this.cantrips) {
      this.headers.push(...this.clericHeader);
      this.headers.push(...this.spellsHeader);
      this.rows = this.levels.map(d => this.toCantripsRow(d));
    } else {
      this.rows = this.levels.map(d => this.toRow(d));
    }
  }

  public get levels(): Level[] {
    return this._levels;
  }

  public spells = false;

  public cantrips = false;

  public spellcaster = false;

  public headers: string[] = [];

  public rows: any[][] = [];

  private commonHeader = ['Level', 'Proficiency bonus', 'Features'];

  private spellsHeader = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'];

  private mageHeader = ['Spells'];

  private clericHeader = ['Cantrips'];

  private toRow(level: Level): any[] {
    return [level.level, level.proficiency_bonus, this.getFeatures(level.features)];
  }

  private toSpellcasterRow(level: Level): any[] {
    return [
      level.level, level.proficiency_bonus, this.getFeatures(level.features), level.spellcasting.spells_known, level.spellcasting.cantrips_known,
      level.spellcasting.spell_slots_level_1, level.spellcasting.spell_slots_level_2, level.spellcasting.spell_slots_level_3,
      level.spellcasting.spell_slots_level_4, level.spellcasting.spell_slots_level_5, level.spellcasting.spell_slots_level_6,
      level.spellcasting.spell_slots_level_7, level.spellcasting.spell_slots_level_8, level.spellcasting.spell_slots_level_9
    ];
  }

  private toSpellsRow(level: Level): any[] {
    return [
      level.level, level.proficiency_bonus, this.getFeatures(level.features), level.spellcasting.spells_known,
      level.spellcasting.spell_slots_level_1, level.spellcasting.spell_slots_level_2, level.spellcasting.spell_slots_level_3,
      level.spellcasting.spell_slots_level_4, level.spellcasting.spell_slots_level_5, level.spellcasting.spell_slots_level_6,
      level.spellcasting.spell_slots_level_7, level.spellcasting.spell_slots_level_8, level.spellcasting.spell_slots_level_9
    ];
  }

  private toCantripsRow(level: Level): any[] {
    return [
      level.level, level.proficiency_bonus, this.getFeatures(level.features), level.spellcasting.cantrips_known,
      level.spellcasting.spell_slots_level_1, level.spellcasting.spell_slots_level_2, level.spellcasting.spell_slots_level_3,
      level.spellcasting.spell_slots_level_4, level.spellcasting.spell_slots_level_5, level.spellcasting.spell_slots_level_6,
      level.spellcasting.spell_slots_level_7, level.spellcasting.spell_slots_level_8, level.spellcasting.spell_slots_level_9
    ];
  }

  public getFeatures(features: LevelFeature[]): string {
    return features.map(f => f.name).join(', ');
  }

  public isSpellcaster(levels: Level[]): boolean {
    let spellcaster;

    if (levels.length > 0) {
      spellcaster = levels[0].spellcasting.spellcaster;
    } else {
      spellcaster = false;
    }

    return spellcaster;
  }

  public hasCantrips(levels: Level[]): boolean {
    let spellcaster;

    if (this.isSpellcaster(levels)) {
      spellcaster = this.levels[0].spellcasting.cantrips_known > 0;
    } else {
      spellcaster = false;
    }

    return spellcaster;
  }

  public hasSpells(levels: Level[]): boolean {
    let spellcaster;

    if (this.isSpellcaster(levels)) {
      spellcaster = (this.levels[0].spellcasting.spells_known > 0);
    } else {
      spellcaster = false;
    }

    return spellcaster;
  }

}
