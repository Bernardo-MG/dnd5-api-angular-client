import { Routes } from '@angular/router';
import { CharclassesComponent } from './containers/charclasses/charclasses.container';

export default [
  { path: 'classes', component: CharclassesComponent },
  { path: 'classes/:id', component: CharclassesComponent }
] as Routes;