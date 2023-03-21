import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '@app/components/components.module';
import { CharclassModule } from '@app/dnd5/charclass/charclass.module';
import { CharclassDetailViewComponent } from './components/charclass-detail-view/charclass-detail-view.component';
import { CharclassListViewComponent } from './components/charclass-list-view/charclass-list-view.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { ViewsRoutingModule } from './views-routing.module';



@NgModule({
  declarations: [
    HomeViewComponent,
    CharclassListViewComponent,
    CharclassDetailViewComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    ComponentsModule,
    CharclassModule
  ]
})
export class ViewsModule { }
