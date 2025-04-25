import { Component } from '@angular/core';
import { AppMenuComponent } from '../app.menu/app.menu.component';
import { LayoutService } from '../../services/layout.service';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, AppMenuComponent],
  templateUrl: './app.sidebar.component.html',
  styleUrl: './app.sidebar.component.scss',
  animations: [
    trigger('slideInOut', [
      state('hidden', style({
        transform: 'translateX(-100%)',   // Sidebar offscreen to the left
        opacity: 0,
        visibility: 'hidden'
      })),
      state('visible', style({
        transform: 'translateX(0)',      // Sidebar fully visible
        opacity: 1,
        visibility: 'visible'
      })),
      transition('hidden => visible', animate('300ms ease-out')),
      transition('visible => hidden', animate('300ms ease-in'))
    ])
  ]
})
export class AppSidebarComponent {
  constructor(public layoutService: LayoutService) {}

  ngOnChanges() {
    if (this.layoutService.menuActive()) {
      document.body.classList.add('sideMenuActive');
    } else {
      document.body.classList.remove('sideMenuActive');
    }
  }
}
