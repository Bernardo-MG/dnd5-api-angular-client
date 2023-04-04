import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeViewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
