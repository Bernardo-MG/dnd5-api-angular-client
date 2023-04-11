import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { Dnd5LayoutComponent } from './components/dnd5-layout/dnd5-layout.component';

@NgModule({
  declarations: [
    Dnd5LayoutComponent
  ],
  imports: [
    CommonModule,
    NoopAnimationsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    Dnd5LayoutComponent
  ]
})
export class LayoutModule { }
