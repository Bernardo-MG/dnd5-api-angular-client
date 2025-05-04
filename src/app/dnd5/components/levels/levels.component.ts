import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Level } from '@app/dnd5/models/charclass/level';
import { Reference } from '@app/dnd5/models/info/reference';

@Component({
  selector: 'dnd5-levels',
  imports: [CommonModule],
  templateUrl: './levels.component.html'
})
export class LevelsComponent implements OnChanges {

  @Input() public levels: Level[] = [];

  public header: string[] = [];

  public rows: any[][] = [];

  private commonHeader = ['Level', 'Proficiency bonus', 'Features'];

  private spellsHeader = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'];

  private mageHeader = ['Spells'];

  private clericHeader = ['Cantrips'];

  ngOnChanges(changes: SimpleChanges): void {
    this.header = this.commonHeader;

    if ((this.hasSpells()) && (this.hasCantrips())) {
      this.header.push(...this.mageHeader);
      this.header.push(...this.clericHeader);
      this.header.push(...this.spellsHeader);
      this.rows = this.levels.map(d => this.toSpellcasterRow(d));
    } else if (this.hasSpells()) {
      this.header.push(...this.mageHeader);
      this.header.push(...this.spellsHeader);
      this.rows = this.levels.map(d => this.toSpellsRow(d));
    } else if (this.hasCantrips()) {
      this.header.push(...this.clericHeader);
      this.header.push(...this.spellsHeader);
      this.rows = this.levels.map(d => this.toCantripsRow(d));
    } else {
      this.rows = this.levels.map(d => this.toRow(d));
    }
  }

  private toRow(level: Level): any[] {
    return [level.level, level.prof_bonus, this.getFeatures(level.features)];
  }

  private toSpellcasterRow(level: Level): any[] {
    return [
      level.level, level.prof_bonus, this.getFeatures(level.features), level.spellcasting.spells_known, level.spellcasting.cantrips_known,
      level.spellcasting.spell_slots_level_1, level.spellcasting.spell_slots_level_2, level.spellcasting.spell_slots_level_3,
      level.spellcasting.spell_slots_level_4, level.spellcasting.spell_slots_level_5, level.spellcasting.spell_slots_level_6,
      level.spellcasting.spell_slots_level_7, level.spellcasting.spell_slots_level_8, level.spellcasting.spell_slots_level_9
    ];
  }

  private toSpellsRow(level: Level): any[] {
    return [
      level.level, level.prof_bonus, this.getFeatures(level.features), level.spellcasting.spells_known,
      level.spellcasting.spell_slots_level_1, level.spellcasting.spell_slots_level_2, level.spellcasting.spell_slots_level_3,
      level.spellcasting.spell_slots_level_4, level.spellcasting.spell_slots_level_5, level.spellcasting.spell_slots_level_6,
      level.spellcasting.spell_slots_level_7, level.spellcasting.spell_slots_level_8, level.spellcasting.spell_slots_level_9
    ];
  }

  private toCantripsRow(level: Level): any[] {
    return [
      level.level, level.prof_bonus, this.getFeatures(level.features), level.spellcasting.cantrips_known,
      level.spellcasting.spell_slots_level_1, level.spellcasting.spell_slots_level_2, level.spellcasting.spell_slots_level_3,
      level.spellcasting.spell_slots_level_4, level.spellcasting.spell_slots_level_5, level.spellcasting.spell_slots_level_6,
      level.spellcasting.spell_slots_level_7, level.spellcasting.spell_slots_level_8, level.spellcasting.spell_slots_level_9
    ];
  }

  public getFeatures(features: Reference[]): string {
    return features.map(f => f.name).join(', ');
  }

  public isSpellcaster(): boolean {
    let spellcaster;

    if (this.levels.length > 0) {
      spellcaster = ('spellcasting' in this.levels[0]);
    } else {
      spellcaster = false;
    }

    return spellcaster;
  }

  public hasCantrips(): boolean {
    let spellcaster;

    if (this.isSpellcaster()) {
      spellcaster = ('cantrips_known' in this.levels[0].spellcasting);
    } else {
      spellcaster = false;
    }

    return spellcaster;
  }

  public hasSpells(): boolean {
    let spellcaster;

    if (this.isSpellcaster()) {
      spellcaster = ('spells_known' in this.levels[0].spellcasting);
    } else {
      spellcaster = false;
    }

    return spellcaster;
  }

}
