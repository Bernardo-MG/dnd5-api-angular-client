import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharclassListComponent } from './charclass-list/charclass-list.component';
import { CharclassDetailComponent } from './charclass-detail/charclass-detail.component';
import { RouterModule } from '@angular/router';
import { CharclassRoutingModule } from './charclass-routing.module';
import { CharclassService } from './services/charclass.service';

@NgModule({
  declarations: [
    CharclassDetailComponent,
    CharclassListComponent
  ],
  providers: [
    CharclassService
  ],
  imports: [
    CharclassRoutingModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    CharclassDetailComponent,
    CharclassListComponent
  ]
})
export class CharclassModule { }
