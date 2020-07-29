import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharclassComponent } from './charclass/charclass.component';

const routes: Routes = [
  { path: 'classes', component: CharclassComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
