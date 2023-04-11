import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Level } from '@app/dnd5/models/charclass/level';
import { Reference } from '@app/dnd5/models/info/reference';

@Component({
  selector: 'dnd5-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.sass']
})
export class LevelsComponent implements OnChanges {

  @Input() public levels: Level[] = [];

  public header: string[] = [];

  public rows: any[][] = [];

  private commonHeader = ['Level', 'Proficiency bonus', 'Features'];

  private spellcastingHeader = ['Spells', 'Cantrips', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isSpellcaster()) {
      this.header = [...this.commonHeader, ...this.spellcastingHeader];
      this.rows = this.levels.map(d => this.toSpellcasterRow(d));
    } else {
      this.header = this.commonHeader;
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

}
