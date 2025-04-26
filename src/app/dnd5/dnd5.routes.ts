import { Routes } from '@angular/router';
import { CharclassListComponent } from './containers/charclass-list/charclass-list.component';

export default [
  { path: 'classes', component: CharclassListComponent },
  { path: 'classes/:id', component: CharclassListComponent }
] as Routes;