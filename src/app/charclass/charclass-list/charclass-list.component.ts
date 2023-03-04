import { Component, Input } from '@angular/core';
import { Charclass } from '@app/charclass/models/charclass';

@Component({
  selector: 'dnd5-charclass-list',
  templateUrl: './charclass-list.component.html',
  styleUrls: ['./charclass-list.component.sass']
})
export class CharclassListComponent {

  @Input() charclasses: Charclass[] = [];

}
