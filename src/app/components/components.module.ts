import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { DataListComponent } from './data-list/data-list.component';
import { IconsModule } from './icons/icons.module';
import { MenuComponent } from './menu/menu.component';
import { PageButtonComponent } from './pagination/page-button/page-button.component';
import { PaginationTemplateComponent } from './pagination/pagination-template/pagination-template.component';
import { PaginationComponent } from './pagination/pagination/pagination.component';
import { WaitingWrapperComponent } from './waiting-wrapper/waiting-wrapper.component';
import { WaitingComponent } from './waiting/waiting.component';



@NgModule({
  declarations: [
    ButtonComponent,
    DataListComponent,
    MenuComponent,
    PaginationComponent,
    PaginationTemplateComponent,
    WaitingComponent,
    WaitingWrapperComponent,
    PageButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule
  ],
  exports: [
    DataListComponent,
    MenuComponent,
    PaginationComponent,
    WaitingComponent,
    WaitingWrapperComponent
  ]
})
export class ComponentsModule { }
