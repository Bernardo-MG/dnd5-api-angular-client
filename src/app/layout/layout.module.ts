import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@app/components/components.module';
import { HeaderLayoutComponent } from './components/header-layout/header-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderLayoutComponent
  ],
  imports: [
    CommonModule,
    NoopAnimationsModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    HeaderLayoutComponent
  ]
})
export class LayoutModule { }
