import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dnd5-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {

  @Input() disabled: boolean = false;

  @Output() public click = new EventEmitter<number>();

  constructor() { }

  public onClick() {
    this.click.emit();
  }

}
