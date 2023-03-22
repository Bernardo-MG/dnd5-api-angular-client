import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dnd5-pagination-button',
  templateUrl: './pagination-button.component.html',
  styleUrls: ['./pagination-button.component.sass']
})
export class PaginationButtonComponent {

  @Input() public active = false;

  @Input() public disabled = false;

  @Output() public action = new EventEmitter<number>();

  public onClick() {
    this.action.emit();
  }

  public getCurrentLabel() {
    let label;

    if (this.active) {
      // Current page
      label = 'page';
    } else {
      // Any other page
      label = '';
    }

    return label;
  }

}
