import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/article-header/article-header.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavLayoutComponent } from './components/sidenav-layout/side-menu-layout.component';
import { WaitingWrapperComponent } from './components/waiting-wrapper/waiting-wrapper.component';
import { WaitingCueComponent } from './components/waiting-cue/waiting-cue.component';
import { IconsModule } from './icons/icons.module';
import { PaginationModule } from './pagination/pagination.module';
import { ArticleComponent } from './components/article/article.component';



@NgModule({
  declarations: [
    LinkListComponent,
    SidenavComponent,
    WaitingCueComponent,
    WaitingWrapperComponent,
    HeaderComponent,
    NavbarComponent,
    SidenavLayoutComponent,
    ArticleComponent
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
    WaitingCueComponent,
    WaitingWrapperComponent,
    IconsModule,
    PaginationModule,
    NavbarComponent,
    SidenavLayoutComponent,
    ArticleComponent
  ]
})
export class SharedModule { }
