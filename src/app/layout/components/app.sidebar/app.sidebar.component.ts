import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnChanges } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { AppMenuComponent } from '../app.menu/app.menu.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, AppMenuComponent],
  templateUrl: './app.sidebar.component.html',
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
export class AppSidebarComponent implements OnChanges {

  constructor(public layoutService: LayoutService) { }

  ngOnChanges() {
    if (this.layoutService.menuActive()) {
      document.body.classList.add('sideMenuActive');
    } else {
      document.body.classList.remove('sideMenuActive');
    }
  }

}
