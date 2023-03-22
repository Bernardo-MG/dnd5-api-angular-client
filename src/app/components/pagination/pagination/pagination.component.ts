import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Pagination } from '@app/components/models/pagination';
import { PaginationRanges } from '../splitter/pagination-ranges';

@Component({
  selector: 'dnd5-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnChanges {

  @Input() public page = 0;

  @Input() public pages = 0;

  @Output() public goTo = new EventEmitter<number>();

  public left: number[] = [];

  public center: number[] = [];

  public right: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    const ranges = new PaginationRanges(this.page, this.pages);
    this.left = ranges.left;
    this.center = ranges.center;
    this.right = ranges.right;
  }

  public onGoTo(page: number) {
    this.goTo.emit(page);
  }

  public isFirst() {
    return this.page === 1;
  }

  public isLast() {
    return this.page === this.pages;
  }

}
