import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListComponent } from './data-list/data-list.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationTemplateComponent } from './navigation-template/navigation-template.component';



@NgModule({
  declarations: [
    DataListComponent,
    MenuComponent,
    NavigationComponent,
    NavigationTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    DataListComponent,
    MenuComponent,
    NavigationComponent
  ]
})
export class ComponentsModule { }
