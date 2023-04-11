import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent {

  @Input() public header: string[] = [];
  
  @Input() public rows: any[][] = [];

}
