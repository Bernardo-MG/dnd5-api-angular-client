import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dnd5-pagination-template',
  templateUrl: './pagination-template.component.html',
  styleUrls: ['./pagination-template.component.sass']
})
export class PaginationTemplateComponent {

  public backwardIcon = faBackward;

  public forwardIcon = faForward;

  @Input() public first = true;

  @Input() public last = true;

  @Input() public current = 0;

  @Input() public firstHalf: number[] = [];

  @Input() public secondHalf: number[] = [];

  @Output() public goTo = new EventEmitter<number>();

  constructor() { }

  public onBackward() {
    this.goTo.emit(this.current - 1);
  }

  public onForward() {
    this.goTo.emit(this.current + 1);
  }

  public onGoTo(page: number) {
    this.goTo.emit(page);
  }

}
