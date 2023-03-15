import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharclassDetailComponent } from './components/charclass-detail/charclass-detail.component';
import { CharclassService } from './services/charclass.service';

@NgModule({
  declarations: [
    CharclassDetailComponent
  ],
  providers: [
    CharclassService
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CharclassDetailComponent
  ]
})
export class CharclassModule { }
