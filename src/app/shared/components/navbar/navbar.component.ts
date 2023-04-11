import { Component, Input } from '@angular/core';

/**
 * Navigation bar component.
 */
@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {

  /**
   * Navbar title.
   */
  @Input() title = '';

  /**
   * Github icon.
   */
  @Input() public github = '';

}
