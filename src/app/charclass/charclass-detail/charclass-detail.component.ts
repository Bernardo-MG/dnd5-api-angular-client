import { Component, Input } from '@angular/core';
import { Charclass } from '@app/models/charclass';

@Component({
  selector: 'charclass-detail',
  templateUrl: './charclass-detail.component.html',
  styleUrls: ['./charclass-detail.component.sass']
})
export class CharclassDetailComponent {

  @Input() charclass: Charclass = { index: '', name: '', hit_die: 0, proficiency_choices: [], proficiencies: [], saving_throws: [], starting_equipment: '', class_levels: '', subclasses: [], url: '' };

  constructor() { }

  asNameList(data: any[]) {
    return data.map(obj => obj.name);
  }

}
