import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppSidebarComponent } from '../app.sidebar/app.sidebar.component';
import { AppTopbarComponent } from '../app.topbar/app.topbar.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, AppTopbarComponent, AppSidebarComponent],
  templateUrl: './app.layout.component.html'
})
export class AppLayoutComponent {

}
