import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataListComponent } from './data-list/data-list.component';
import { MenuComponent } from './menu/menu.component';
import { PaginationTemplateComponent } from './pagination-template/pagination-template.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    DataListComponent,
    MenuComponent,
    PaginationComponent,
    PaginationTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    DataListComponent,
    MenuComponent,
    PaginationComponent
  ]
})
export class ComponentsModule { }
