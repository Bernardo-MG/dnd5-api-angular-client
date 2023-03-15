import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharclassDetailComponent } from './components/charclass-detail/charclass-detail.component';
import { CharclassListComponent } from './components/charclass-list/charclass-list.component';
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
    CommonModule,
    RouterModule
  ],
  exports: [
    CharclassDetailComponent,
    CharclassListComponent
  ]
})
export class CharclassModule { }
