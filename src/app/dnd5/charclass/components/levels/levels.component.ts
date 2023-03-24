import { Component, Input } from '@angular/core';
import { Level } from '@app/dnd5/models/charclass/level';
import { Reference } from '@app/dnd5/models/info/reference';

@Component({
  selector: 'dnd5-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.sass']
})
export class LevelsComponent {

  @Input() public levels: Level[] = [];

  public getFeatures(features: Reference[]): string {
    return features.map(f => f.name).join(', ');
  }

}
