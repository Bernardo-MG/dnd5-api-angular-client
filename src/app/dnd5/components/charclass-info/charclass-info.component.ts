import { Component, Input } from '@angular/core';
import { Charclass } from '@app/dnd5/models/charclass/charclass';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-charclass-info',
  imports: [CardModule],
  templateUrl: './charclass-info.component.html'
})
export class CharclassInfoComponent {

  @Input() public charclass = new Charclass();

}
