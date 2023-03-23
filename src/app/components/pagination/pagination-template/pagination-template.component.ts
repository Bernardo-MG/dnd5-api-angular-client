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

  /**
   * Disabled backward flag. To disable the backward button.
   */
  @Input() public disableBackward = true;

  /**
   * Disabled forward flag. To disable the forward button.
   */
  @Input() public disableForward = true;

  /**
   * Current page.
   */
  @Input() public current = 0;

  /**
   * Left page range.
   */
  @Input() public left: number[] = [];

  /**
   * Center page range.
   */
  @Input() public center: number[] = [];

  /**
   * Right page range.
   */
  @Input() public right: number[] = [];

  @Output() public goTo = new EventEmitter<number>();

  /**
   * Sends a "go to page" event for the previous page.
   */
  public onBackward() {
    this.goTo.emit(this.current - 1);
  }

  /**
   * Sends a "go to page" event for the next page.
   */
  public onForward() {
    this.goTo.emit(this.current + 1);
  }

  /**
   * Sends a "go to page" event for selected page.
   */
  public onGoTo(page: number) {
    this.goTo.emit(page);
  }

  /**
   * Indicates if the backward button should be disabled.
   * 
   * @returns true if the backward button should be disabled, false otherwise
   */
  public isBackwardDisabled(): boolean {
    return ((this.disableBackward) || (this.disabled));
  }

  /**
   * Indicates if the forward button should be disabled.
   * 
   * @returns true if the forward button should be disabled, false otherwise
   */
  public isForwardDisabled(): boolean {
    return ((this.disableForward) || (this.disabled));
  }

  /**
   * Indicates if the center range should be drawn. This depends on both the left and center range having values.
   * 
   * @returns true if the center range should be drawn, false otherwise
   */
  public isAbleToDrawCenterRange() {
    return ((this.left.length > 0) && (this.center.length > 0));
  }

  /**
   * Indicates if the right range should be drawn. This depends on both the left and right range having values.
   * 
   * @returns true if the right range should be drawn, false otherwise
   */
  public isAbleToDrawRightRange() {
    return ((this.left.length > 0) && (this.right.length > 0));
  }

  /**
   * Indicates if the received page is the current page.
   * 
   * @param page page to check
   * @returns true if the page matches the current page, false otherwise
   */
  public isCurrent(page: number) {
    return page === this.current;
  }

}
