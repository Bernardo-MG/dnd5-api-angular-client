import { Component, Input } from '@angular/core';
import { Charclass } from '@app/dnd5/models/charclass/charclass';
import { Proficiency } from '@app/dnd5/models/charclass/proficiency';

@Component({
  selector: 'dnd5-charclass-detail',
  templateUrl: './charclass-detail.component.html',
  styleUrls: ['./charclass-detail.component.sass']
})
export class CharclassDetailComponent {

  @Input() public charclass: Charclass = new Charclass();

  @Input() public proficiencies: Proficiency[] = [];

  asNameList(data: any[]): string {
    let result;

    if (data) {
      result = data.map(obj => obj.name).join(', ');
    } else {
      result = '';
    }

    return result;
  }

}
