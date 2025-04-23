import { Component } from '@angular/core';
import { AppMenuComponent } from '../app.menu/app.menu.component';

@Component({
  selector: 'app-sidebar',
  imports: [AppMenuComponent],
  templateUrl: './app.sidebar.component.html',
  styleUrl: './app.sidebar.component.scss'
})
export class AppSidebarComponent {

}
