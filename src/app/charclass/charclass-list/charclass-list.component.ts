import { Component, Input } from '@angular/core';
import { Reference } from '../models/reference';

@Component({
  selector: 'dnd5-charclass-list',
  templateUrl: './charclass-list.component.html',
  styleUrls: ['./charclass-list.component.sass']
})
export class CharclassListComponent {

  @Input() charclasses: Reference[] = [];

}
