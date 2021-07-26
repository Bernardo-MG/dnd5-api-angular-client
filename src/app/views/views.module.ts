import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharclassModule } from '@app/charclass/charclass.module';
import { CharclassViewComponent } from './charclass-view/charclass-view.component';

@NgModule({
  declarations: [
    CharclassViewComponent
  ],
  imports: [
    CommonModule,
    CharclassModule
  ]
})
export class ViewsModule { }
