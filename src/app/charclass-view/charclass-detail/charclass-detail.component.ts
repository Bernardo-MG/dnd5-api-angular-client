import { Component, Input } from '@angular/core';
import { Charclass } from '../../models/charclass';

@Component({
  selector: 'app-charclass-detail',
  templateUrl: './charclass-detail.component.html',
  styleUrls: ['./charclass-detail.component.sass']
})
export class CharclassDetailComponent {

  @Input() charclass!: Charclass;

  constructor() { }

  asList(data: any[]) {
    return data.map(obj => obj.name);
  }

}
