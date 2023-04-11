import { Component } from '@angular/core';
import { Menu } from '@app/shared/models/menu';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass']
})
export class MainLayoutComponent {

  public menus: Menu[] = [{ title: 'Character', links: [{ title: 'Classes', path: '/classes' }] }];

  public title = 'dnd5-api-angular-client';

}
