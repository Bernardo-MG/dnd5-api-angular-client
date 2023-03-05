import { Component, Input } from '@angular/core';
import { Charclass } from '@app/dnd5/models/charclass';

@Component({
  selector: 'dnd5-charclass-detail',
  templateUrl: './charclass-detail.component.html',
  styleUrls: ['./charclass-detail.component.sass']
})
export class CharclassDetailComponent {

  @Input() charclass: Charclass = new Charclass();

  constructor() { }

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
