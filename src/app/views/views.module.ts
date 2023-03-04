import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharclassModule } from '@app/charclass/charclass.module';
import { CharclassViewComponent } from './charclass-view/charclass-view.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    CharclassViewComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CharclassModule
  ],
  exports: [
    CharclassViewComponent
  ]
})
export class ViewsModule { }
