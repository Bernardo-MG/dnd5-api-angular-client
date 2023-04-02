import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { CharclassRoutingModule } from './charclass-routing.module';
import { ChoiceComponent } from './components/choice/choice.component';
import { InitialEquipmentComponent } from './components/initial-equipment/initial-equipment.component';
import { LevelsComponent } from './components/levels/levels.component';
import { OptionSetNodeComponent } from './components/option-set-node/option-set-node.component';
import { OptionSetComponent } from './components/option-set/option-set.component';
import { ProficienciesComponent } from './components/proficiencies/proficiencies.component';
import { CharclassService } from './services/charclass.service';
import { CharclassDetailViewComponent } from './views/charclass-detail-view/charclass-detail-view.component';
import { CharclassListViewComponent } from './views/charclass-list-view/charclass-list-view.component';

@NgModule({
  declarations: [
    ProficienciesComponent,
    LevelsComponent,
    OptionSetComponent,
    InitialEquipmentComponent,
    OptionSetNodeComponent,
    ChoiceComponent,
    CharclassListViewComponent,
    CharclassDetailViewComponent
  ],
  providers: [
    CharclassService
  ],
  imports: [
    CharclassRoutingModule,
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ProficienciesComponent,
    LevelsComponent,
    InitialEquipmentComponent,
    ChoiceComponent,
    CharclassListViewComponent,
    CharclassDetailViewComponent
  ]
})
export class CharclassModule { }
