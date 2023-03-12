import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharclassRoutingModule } from './charclass-routing.module';
import { CharclassDetailComponent } from './components/charclass-detail/charclass-detail.component';
import { CharclassListComponent } from './components/charclass-list/charclass-list.component';
import { CharclassService } from './services/charclass.service';
import { CharclassViewComponent } from './views/charclass-view/charclass-view.component';

@NgModule({
  declarations: [
    CharclassDetailComponent,
    CharclassListComponent,
    CharclassViewComponent
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
    CharclassViewComponent
  ]
})
export class CharclassModule { }
