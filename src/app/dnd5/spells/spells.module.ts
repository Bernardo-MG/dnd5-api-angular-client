import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { SpellsService } from './services/spells.service';
import { SpellsRoutingModule } from './spells-routing.module';
import { SpellsDetailViewComponent } from './views/spells-detail-view/spells-detail-view.component';
import { SpellsListViewComponent } from './views/spells-list-view/spells-list-view.component';



@NgModule({
  declarations: [
    SpellsListViewComponent,
    SpellsDetailViewComponent
  ],
  providers: [
    SpellsService
  ],
  imports: [
    CommonModule,
    SharedModule,
    SpellsRoutingModule
  ]
})
export class SpellsModule { }
