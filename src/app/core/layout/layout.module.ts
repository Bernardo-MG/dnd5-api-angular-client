import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SideMenuLayoutComponent } from './components/side-menu-layout/side-menu-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '@app/shared/shared.module';
import { Dnd5LayoutComponent } from './components/dnd5-layout/dnd5-layout.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SideMenuLayoutComponent,
    Dnd5LayoutComponent
  ],
  imports: [
    CommonModule,
    NoopAnimationsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    SideMenuLayoutComponent
  ]
})
export class LayoutModule { }
