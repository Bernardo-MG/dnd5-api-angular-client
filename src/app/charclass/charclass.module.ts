import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatListModule } from '@angular/material/list';

import { CharclassListComponent } from './charclass-list/charclass-list.component';
import { CharclassDetailComponent } from './charclass-detail/charclass-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CharclassDetailComponent,
    CharclassListComponent
  ],
  imports: [
    CommonModule,
    RouterTestingModule,
    RouterModule,
    FlexLayoutModule,
    MatListModule
  ],
  exports: [
    CharclassDetailComponent,
    CharclassListComponent
  ]
})
export class CharclassModule { }
