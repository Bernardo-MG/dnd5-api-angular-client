import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitemComponent } from '../app.menuitem/app.menuitem.component';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, AppMenuitemComponent, RouterModule],
  templateUrl: './app.menu.component.html',
  styleUrl: './app.menu.component.scss'
})
export class AppMenuComponent implements OnInit {

  model: MenuItem[] = [];

  ngOnInit() {
      this.model = [
          {
              label: 'DnD 5e',
              items: [{ label: 'Classes', icon: 'pi pi-fw pi-home', routerLink: ['/classes'] }]
          }
      ];
  }

}
