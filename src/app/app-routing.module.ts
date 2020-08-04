import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharclassComponent } from './charclass-view/charclass/charclass.component';

const routes: Routes = [
  { path: '', redirectTo: '/classes', pathMatch: 'full' },
  { path: 'classes', redirectTo: 'classes/', pathMatch: 'full' },
  { path: 'classes/:id', component: CharclassComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
