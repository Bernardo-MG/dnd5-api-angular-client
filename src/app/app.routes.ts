import { Routes } from '@angular/router';
import { AppHomeComponent } from './home/components/app.home/app.home.component';
import { AppLayoutComponent } from './layout/components/app.layout/app.layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: AppHomeComponent },
      { path: '', loadChildren: () => import('./dnd5/dnd5.routes') }
    ]
  }
];
