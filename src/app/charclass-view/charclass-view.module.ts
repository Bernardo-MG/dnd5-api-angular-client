import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

import { CharclassListComponent } from './charclass-list/charclass-list.component';
import { CharclassComponent } from './charclass/charclass.component';
import { CharclassDetailComponent } from './charclass-detail/charclass-detail.component';

@NgModule({
  declarations: [
    CharclassComponent,
    CharclassDetailComponent,
    CharclassListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    CharclassListComponent,
    CharclassComponent,
    CharclassDetailComponent
  ]
})
export class CharclassViewModule { }
