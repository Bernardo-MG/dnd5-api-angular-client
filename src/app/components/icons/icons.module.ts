import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackwardIconComponent } from './backward-icon/backward-icon.component';
import { FastBackwardIconComponent } from './fast-backward-icon/fast-backward-icon.component';
import { FastForwardIconComponent } from './fast-forward-icon/fast-forward-icon.component';
import { ForwardIconComponent } from './forward-icon/forward-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    BackwardIconComponent,
    ForwardIconComponent,
    FastBackwardIconComponent,
    FastForwardIconComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    BackwardIconComponent,
    ForwardIconComponent,
    FastBackwardIconComponent,
    FastForwardIconComponent
  ]
})
export class IconsModule { }
