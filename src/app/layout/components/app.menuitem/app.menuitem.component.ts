import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menuitem',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.menuitem.component.html'
})
export class AppMenuitemComponent {
  @Input() item!: MenuItem;
  @Input() index!: number;
}
