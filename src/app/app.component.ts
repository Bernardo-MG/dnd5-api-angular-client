import { Component } from '@angular/core';
import { MenuLink } from './layout/model/menu-link';

@Component({
  selector: 'dnd5-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  links: MenuLink[] = [{ name: 'Classes', path: '/classes' }];

  title: string = 'dnd5-api-angular-client';

}
