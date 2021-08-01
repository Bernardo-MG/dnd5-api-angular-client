import { Component } from '@angular/core';
import { MenuLink } from './navigation/model/menu-link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  links: MenuLink[] = [{ name: 'Classes', path: '/classes' }];

  title: String = 'dnd5-api-angular-client';

}
