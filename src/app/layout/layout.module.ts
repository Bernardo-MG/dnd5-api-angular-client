import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [
    NavigationMenuComponent
  ],
  imports: [
    LayoutRoutingModule,
    CommonModule,
    NoopAnimationsModule,
    RouterModule,
  ],
  exports: [
    NavigationMenuComponent
  ]
})
export class LayoutModule { }
