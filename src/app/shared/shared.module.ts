import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleSectionComponent } from './components/article-section/article-section.component';
import { ArticleComponent } from './components/article/article.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavLayoutComponent } from './components/sidenav-layout/side-menu-layout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { WaitingCueComponent } from './components/waiting-cue/waiting-cue.component';
import { WaitingWrapperComponent } from './components/waiting-wrapper/waiting-wrapper.component';
import { IconsModule } from './icons/icons.module';
import { PaginationModule } from './pagination/pagination.module';



@NgModule({
  declarations: [
    LinkListComponent,
    SidenavComponent,
    WaitingCueComponent,
    WaitingWrapperComponent,
    NavbarComponent,
    SidenavLayoutComponent,
    ArticleComponent,
    ArticleSectionComponent
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
    ArticleComponent,
    ArticleSectionComponent
  ]
})
export class SharedModule { }
