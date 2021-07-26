import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharclassViewComponent } from '@app/views/charclass-view/charclass-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'classes/', pathMatch: 'full' },
  { path: 'classes/:id', component: CharclassViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
