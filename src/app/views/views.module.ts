import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { ViewsRoutingModule } from './views-routing.module';



@NgModule({
  declarations: [
    HomeViewComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
