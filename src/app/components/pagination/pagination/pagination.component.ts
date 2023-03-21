import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pagination } from '@app/components/models/pagination';

@Component({
  selector: 'dnd5-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnChanges {

  @Input() public pagination = new Pagination();

  public firstHalf: number[] = [];

  public secondHalf: number[] = [];

  private step = 2;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    var lowest;
    var highest;

    lowest = this.pagination.page - this.step;
    if (lowest < 1) {
      lowest = this.pagination.page;
    }

    highest = this.pagination.page + this.step;
    if (highest > this.pagination.totalPages) {
      highest = this.pagination.totalPages;
    }

    this.firstHalf = [];
    this.secondHalf = [];
    if ((highest - lowest) < this.step) {
      // No splitting required
      for (var i = lowest; i <= highest; i++) {
        this.firstHalf.push(i);
      }
    } else {
      // Split page numbers
      const top = lowest + this.step;
      for (var i = lowest; i <= top; i++) {
        this.firstHalf.push(i);
      }

      const bottom = highest - this.step;
      for (var i = bottom; i <= highest; i++) {
        this.secondHalf.push(i);
      }
    }
  }

}