import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './core/home/components/home-view/home-view.component';
import { MainLayoutComponent } from './core/layout/components/main-layout/main-layout.component';

const charsModule = () => import('@app/dnd5/charclass/charclass.module').then(x => x.CharclassModule);

const routes: Routes = [
  // Main app
  {
    path: '', component: MainLayoutComponent,
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
