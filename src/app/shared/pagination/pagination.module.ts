import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationNavigationTemplateComponent } from './components/pagination-navigation-template/pagination-navigation-template.component';
import { PaginationNavigationComponent } from './components/pagination-navigation/pagination-navigation.component';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [
    PaginationNavigationComponent,
    PaginationNavigationTemplateComponent,
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    PaginationNavigationComponent
  ]
})
export class PaginationModule { }
