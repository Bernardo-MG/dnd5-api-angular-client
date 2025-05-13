import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-topbar',
  imports: [CommonModule, RouterLink, StyleClassModule],
  templateUrl: './app.topbar.component.html'
})
export class AppTopbarComponent {

  public layoutService = inject(LayoutService);

}
