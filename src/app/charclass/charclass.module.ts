import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';

import { CharclassListComponent } from './charclass-list/charclass-list.component';
import { CharclassDetailComponent } from './charclass-detail/charclass-detail.component';
import { RouterModule } from '@angular/router';
import { CharclassRoutingModule } from './charclass-routing.module';

@NgModule({
  declarations: [
    CharclassDetailComponent,
    CharclassListComponent
  ],
  imports: [
    CharclassRoutingModule,
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
