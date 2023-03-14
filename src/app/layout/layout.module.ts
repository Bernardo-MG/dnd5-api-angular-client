import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';

@NgModule({
  declarations: [
    NavigationMenuComponent,
    LayoutComponent,
    DropdownMenuComponent
  ],
  imports: [
    CommonModule,
    NoopAnimationsModule,
    RouterModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
