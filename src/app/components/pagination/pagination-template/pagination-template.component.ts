import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dnd5-pagination-template',
  templateUrl: './pagination-template.component.html',
  styleUrls: ['./pagination-template.component.sass']
})
export class PaginationTemplateComponent {

  @Input() public disabled = false;

  @Input() public first = true;

  @Input() public last = true;

  @Input() public page = 0;

  @Input() public left: number[] = [];

  @Input() public center: number[] = [];

  @Input() public right: number[] = [];

  @Output() public goTo = new EventEmitter<number>();

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
    return (this.first) || (this.disabled);
  }

  public isForwardDisabled(): boolean {
    return (this.last) || (this.disabled);
  }

  public isGoToDisabled(): boolean {
    return (this.disabled);
  }

  public isAbleToDrawCenterRange() {
    return (this.left.length > 0) && (this.center.length > 0);
  }

  public isAbleToDrawRightRange() {
    return (this.left.length > 0) && (this.right.length > 0);
  }

  public isCurrent(page: number){
    return page === this.page;
  }

  public getCurrentLabel(page: number){
    let label;

    if(page === this.page) {
      // Current page
      label = 'page';
    } else {
      // Any other page
      label = '';
    }

    return label;
  }

}
