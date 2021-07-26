import { Component, Input } from '@angular/core';
import { Charclass } from '@app/models/charclass';

@Component({
  selector: 'app-charclass-list',
  templateUrl: './charclass-list.component.html',
  styleUrls: ['./charclass-list.component.sass']
})
export class CharclassListComponent {

  @Input() charclasses: Charclass[] = [];

}
