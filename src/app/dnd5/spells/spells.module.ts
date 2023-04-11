import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellsListViewComponent } from './views/spells-list-view/spells-list-view.component';
import { SpellsDetailViewComponent } from './views/spells-detail-view/spells-detail-view.component';



@NgModule({
  declarations: [
    SpellsListViewComponent,
    SpellsDetailViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SpellsModule { }
