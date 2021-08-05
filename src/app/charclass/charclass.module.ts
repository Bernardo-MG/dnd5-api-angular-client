import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';

import { CharclassListComponent } from './charclass-list/charclass-list.component';
import { CharclassDetailComponent } from './charclass-detail/charclass-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CharclassDetailComponent,
    CharclassListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule
  ],
  exports: [
    CharclassDetailComponent,
    CharclassListComponent
  ]
})
export class CharclassModule { }
