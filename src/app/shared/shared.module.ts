import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { IconsModule } from './components/icons/icons.module';
import { MenuComponent } from './components/menu/menu.component';
import { PaginationModule } from './components/pagination/pagination.module';
import { WaitingWrapperComponent } from './components/waiting-wrapper/waiting-wrapper.component';
import { WaitingComponent } from './components/waiting/waiting.component';



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
export class SharedModule { }
