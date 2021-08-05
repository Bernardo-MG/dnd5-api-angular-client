import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharclassViewComponent } from '@app/views/charclass-view/charclass-view.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'classes', component: CharclassViewComponent },
  { path: 'classes/:id', component: CharclassViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
