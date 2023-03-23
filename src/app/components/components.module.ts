import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { DataListComponent } from './data-list/data-list.component';
import { IconsModule } from './icons/icons.module';
import { MenuComponent } from './menu/menu.component';
import { PaginationModule } from './pagination/pagination.module';
import { WaitingWrapperComponent } from './waiting-wrapper/waiting-wrapper.component';
import { WaitingComponent } from './waiting/waiting.component';



@NgModule({
  declarations: [
    ButtonComponent,
    DataListComponent,
    MenuComponent,
    WaitingComponent,
    WaitingWrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
    PaginationModule
  ],
  exports: [
    DataListComponent,
    MenuComponent,
    WaitingComponent,
    WaitingWrapperComponent,
    IconsModule,
    PaginationModule
  ]
})
export class ComponentsModule { }
