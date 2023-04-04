import { Component } from '@angular/core';
import { Menu } from '@app/shared/models/menu';

@Component({
  selector: 'dnd5-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public menus: Menu[] = [{ title: 'Character', links: [{ title: 'Classes', path: '/classes' }] }];

  public title = 'dnd5-api-angular-client';

}
