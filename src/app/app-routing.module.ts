import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './core/home/components/home-view/home-view.component';
import { Dnd5LayoutComponent } from './core/layout/components/dnd5-layout/dnd5-layout.component';

const charsModule = () => import('@app/dnd5/charclass/charclass.module').then(x => x.CharclassModule);

const routes: Routes = [
  // Main app
  {
    path: '', component: Dnd5LayoutComponent,
    children: [
      { path: '', component: HomeViewComponent },
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
