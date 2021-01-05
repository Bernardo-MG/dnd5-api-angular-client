import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from "@angular/router/testing";

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatListModule } from '@angular/material/list';

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
    RouterTestingModule,
    FlexLayoutModule,
    MatListModule
  ],
  exports: [
    CommonModule,
    RouterTestingModule,
    FlexLayoutModule,
    MatListModule,
    CharclassListComponent,
    CharclassComponent,
    CharclassDetailComponent
  ]
})
export class CharclassViewModule { }
