import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeadingComponent } from './components/heading/heading.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavLayoutComponent } from './components/sidenav-layout/side-menu-layout.component';
import { WaitingWrapperComponent } from './components/waiting-wrapper/waiting-wrapper.component';
import { WaitingComponent } from './components/waiting/waiting.component';
import { IconsModule } from './icons/icons.module';
import { PaginationModule } from './pagination/pagination.module';



@NgModule({
  declarations: [
    LinkListComponent,
    SidenavComponent,
    WaitingComponent,
    WaitingWrapperComponent,
    HeadingComponent,
    NavbarComponent,
    SidenavLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
    PaginationModule
  ],
  exports: [
    LinkListComponent,
    SidenavComponent,
    WaitingComponent,
    WaitingWrapperComponent,
    IconsModule,
    PaginationModule,
    HeadingComponent,
    NavbarComponent,
    SidenavLayoutComponent
  ]
})
export class SharedModule { }
