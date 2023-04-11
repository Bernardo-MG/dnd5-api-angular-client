import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationTemplateComponent } from './components/pagination-template/pagination-template.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [
    PaginationComponent,
    PaginationTemplateComponent,
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    PaginationComponent
  ]
})
export class PaginationModule { }
