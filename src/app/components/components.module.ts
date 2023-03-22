import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './button/button.component';
import { DataListComponent } from './data-list/data-list.component';
import { MenuComponent } from './menu/menu.component';
import { PaginationTemplateComponent } from './pagination/pagination-template/pagination-template.component';
import { WaitingWrapperComponent } from './waiting-wrapper/waiting-wrapper.component';
import { WaitingComponent } from './waiting/waiting.component';
import { BackwardIconComponent } from './icons/backward-icon/backward-icon.component';
import { ForwardIconComponent } from './icons/forward-icon/forward-icon.component';
import { PaginationComponent } from './pagination/pagination/pagination.component';
import { PaginationButtonComponent } from './pagination/pagination-button/pagination-button.component';



@NgModule({
  declarations: [
    ButtonComponent,
    DataListComponent,
    MenuComponent,
    PaginationComponent,
    PaginationTemplateComponent,
    WaitingComponent,
    WaitingWrapperComponent,
    BackwardIconComponent,
    ForwardIconComponent,
    PaginationButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
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
