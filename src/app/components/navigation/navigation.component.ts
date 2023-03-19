import { Component, Input } from '@angular/core';
import { PaginationDetails } from '../models/pagination-details';

@Component({
  selector: 'dnd5-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent {

  @Input() public pagination = new PaginationDetails();
  
  constructor() { }

}
