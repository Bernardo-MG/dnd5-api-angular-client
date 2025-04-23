import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-topbar',
  imports: [CommonModule, StyleClassModule],
  templateUrl: './app.topbar.component.html',
  styleUrl: './app.topbar.component.scss'
})
export class AppTopbarComponent {

  items!: MenuItem[];

  constructor(public layoutService: LayoutService) { }

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
  }

}
