import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GithubIconComponent } from './github-icon/github-icon.component';



@NgModule({
  declarations: [
    GithubIconComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    GithubIconComponent
  ]
})
export class IconsModule { }
