import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeadingComponent } from './components/heading/heading.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideMenuLayoutComponent } from './components/side-menu-layout/side-menu-layout.component';
import { WaitingWrapperComponent } from './components/waiting-wrapper/waiting-wrapper.component';
import { WaitingComponent } from './components/waiting/waiting.component';
import { IconsModule } from './icons/icons.module';
import { PaginationModule } from './pagination/pagination.module';



@NgModule({
  declarations: [
    LinkListComponent,
    MenuComponent,
    WaitingComponent,
    WaitingWrapperComponent,
    HeadingComponent,
    NavbarComponent,
    SideMenuLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
    PaginationModule
  ],
  exports: [
    LinkListComponent,
    MenuComponent,
    WaitingComponent,
    WaitingWrapperComponent,
    IconsModule,
    PaginationModule,
    HeadingComponent,
    NavbarComponent,
    SideMenuLayoutComponent
  ]
})
export class SharedModule { }
