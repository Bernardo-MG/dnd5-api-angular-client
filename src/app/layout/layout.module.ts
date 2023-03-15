import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/header-layout/header-layout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent,
    DropdownMenuComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    NoopAnimationsModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
