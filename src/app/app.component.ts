import { Component } from '@angular/core';
import { Menu } from './components/models/menu';

@Component({
  selector: 'dnd5-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  menus: Menu[] = [{ title: 'Character', links: [{ title: 'Classes', path: '/classes' }] }];

  title = 'dnd5-api-angular-client';

}
