import { Component, Input } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'dnd5-charclass-list',
  templateUrl: './charclass-list.component.html',
  styleUrls: ['./charclass-list.component.sass']
})
export class CharclassListComponent {

  @Input() charclasses: Link[] = [];

}
