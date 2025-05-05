import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitemComponent } from '../app.menuitem/app.menuitem.component';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, AppMenuitemComponent, RouterModule],
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent {

  public model: MenuItem[] = [];

  constructor() {
    this.model = [
      {
        label: 'DnD 5e',
        items: [{ label: 'Classes', icon: 'pi pi-fw pi-home', routerLink: ['/classes'] }]
      }
    ];
  }

}
