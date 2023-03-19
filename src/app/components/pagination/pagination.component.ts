import { Component, Input } from '@angular/core';
import { PaginationDetails } from '../models/pagination-details';

@Component({
  selector: 'dnd5-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent {

  @Input() public pagination = new PaginationDetails();
  
  constructor() { }

}
