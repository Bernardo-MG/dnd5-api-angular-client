import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dnd5-pagination-template',
  templateUrl: './pagination-template.component.html',
  styleUrls: ['./pagination-template.component.sass']
})
export class PaginationTemplateComponent {

  /**
   * Disabled flag. To disable all the inner components.
   */
  @Input() public disabled = false;

  @Input() public disableBackward = true;

  @Input() public disableForward = true;

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
    return ((this.disableBackward) || (this.disabled));
  }

  public isForwardDisabled(): boolean {
    return ((this.disableForward) || (this.disabled));
  }

  public isGoToDisabled(): boolean {
    return this.disabled;
  }

  public isAbleToDrawCenterRange() {
    return ((this.left.length > 0) && (this.center.length > 0));
  }

  public isAbleToDrawRightRange() {
    return ((this.left.length > 0) && (this.right.length > 0));
  }

  public isCurrent(page: number) {
    return page === this.page;
  }

}
