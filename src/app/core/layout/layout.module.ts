import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HeaderLayoutComponent } from './components/header-layout/header-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderLayoutComponent
  ],
  imports: [
    CommonModule,
    NoopAnimationsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HeaderLayoutComponent
  ]
})
export class LayoutModule { }
