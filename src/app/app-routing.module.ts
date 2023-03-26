import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const charsModule = () => import('@app/dnd5/charclass/charclass.module').then(x => x.CharclassModule);
const homeModule = () => import('@app/home/home.module').then(x => x.ViewsModule);

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: homeModule },
      { path: 'classes', loadChildren: charsModule }
    ]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
