import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/layout.module';



@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    HomeModule
  ],
  exports: [
    LayoutModule,
    HomeModule
  ]
})
export class CoreModule { }
