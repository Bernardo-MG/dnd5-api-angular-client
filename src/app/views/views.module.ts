import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharclassModule } from '@app/dnd5/charclass/charclass.module';
import { CharclassViewComponent } from './components/charclass-view/charclass-view.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { ViewsRoutingModule } from './views-routing.module';



@NgModule({
  declarations: [
    HomeViewComponent,
    CharclassViewComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    CharclassModule
  ]
})
export class ViewsModule { }
