import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { HomeViewComponent } from './components/home-view/home-view.component';



@NgModule({
  declarations: [
    HomeViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
