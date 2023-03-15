import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListComponent } from './data-list/data-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DataListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DataListComponent
  ]
})
export class ComponentsModule { }
