import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharclassViewModule } from '@app/charclass-view/charclass-view.module';
import { CharclassViewComponent } from './charclass-view/charclass-view.component';

@NgModule({
  declarations: [
    CharclassViewComponent
  ],
  imports: [
    CommonModule,
    CharclassViewModule
  ]
})
export class ViewsModule { }
