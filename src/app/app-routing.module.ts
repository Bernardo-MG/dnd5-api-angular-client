import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const layoutModule = () => import('@app/layout/layout.module').then(x => x.LayoutModule);
const charsModule = () => import('@app/dnd5/charclass/charclass.module').then(x => x.CharclassModule);

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: layoutModule },
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
