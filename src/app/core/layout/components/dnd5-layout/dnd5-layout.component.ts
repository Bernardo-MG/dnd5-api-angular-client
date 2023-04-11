import { Component } from '@angular/core';
import { Menu } from '@app/shared/models/menu';

@Component({
  selector: 'core-dnd5-layout',
  templateUrl: './dnd5-layout.component.html',
  styleUrls: ['./dnd5-layout.component.sass']
})
export class Dnd5LayoutComponent {

  public menus: Menu[] = [{ title: 'Character', links: [{ title: 'Classes', route: '/classes' }] }];

  public title = 'dnd5-api-angular-client';

  public github = 'https://github.com/Bernardo-MG/dnd5-api-angular-client';

}
