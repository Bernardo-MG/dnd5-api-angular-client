import { Component } from '@angular/core';
import { AppMenuComponent } from '../app.menu/app.menu.component';
import { LayoutService } from '../../services/layout.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, AppMenuComponent],
  templateUrl: './app.sidebar.component.html',
  styleUrl: './app.sidebar.component.scss'
})
export class AppSidebarComponent {

  constructor(public layoutService: LayoutService) { }

}
