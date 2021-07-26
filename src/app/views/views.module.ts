import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharclassModule } from '@app/charclass/charclass.module';
import { CharclassViewComponent } from './charclass-view/charclass-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    CharclassViewComponent
  ],
  imports: [
    CommonModule,
    CharclassModule,
    FlexLayoutModule
  ],
  exports: [
    CharclassViewComponent
  ]
})
export class ViewsModule { }
