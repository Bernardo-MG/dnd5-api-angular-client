import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';

@NgModule({
  declarations: [
    NavbarComponent,
    DropdownMenuComponent
  ],
  imports: [
    CommonModule,
    NoopAnimationsModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class LayoutModule { }
