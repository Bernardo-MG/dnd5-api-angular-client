import { Component, Input } from '@angular/core';

@Component({
  selector: 'dnd5-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {

  @Input() title: String = '';

  constructor() { }

}
