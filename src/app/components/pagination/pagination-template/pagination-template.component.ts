import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'dnd5-pagination-template',
  templateUrl: './pagination-template.component.html',
  styleUrls: ['./pagination-template.component.sass']
})
export class PaginationTemplateComponent implements OnChanges {

  @Input() public disabled = false;

  @Input() public first = true;

  @Input() public last = true;

  @Input() public page = 0;

  @Input() public left: number[] = [];

  @Input() public center: number[] = [];

  @Input() public right: number[] = [];

  @Output() public goTo = new EventEmitter<number>();

  public backwardDisabled = false;

  public forwardDisabled = false;

  public drawCenter = false;

  public drawRight = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.backwardDisabled = ((this.first) || (this.disabled));
    this.forwardDisabled = ((this.last) || (this.disabled));

    this.drawCenter = ((this.left.length > 0) && (this.center.length > 0));
    this.drawRight = ((this.left.length > 0) && (this.right.length > 0));
  }

  public onBackward() {
    this.goTo.emit(this.page - 1);
  }

  public onForward() {
    this.goTo.emit(this.page + 1);
  }

  public onGoTo(page: number) {
    this.goTo.emit(page);
  }

  public isBackwardDisabled(): boolean {
    return this.backwardDisabled;
  }

  public isForwardDisabled(): boolean {
    return this.forwardDisabled;
  }

  public isGoToDisabled(): boolean {
    return this.disabled;
  }

  public isAbleToDrawCenterRange() {
    return this.drawCenter;
  }

  public isAbleToDrawRightRange() {
    return this.drawRight;
  }

  public isCurrent(page: number) {
    return page === this.page;
  }

  public getCurrentLabel(page: number) {
    let label;

    if (page === this.page) {
      // Current page
      label = 'page';
    } else {
      // Any other page
      label = '';
    }

    return label;
  }

}
