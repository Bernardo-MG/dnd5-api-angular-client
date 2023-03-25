import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProficienciesComponent } from './components/proficiencies/proficiencies.component';
import { CharclassService } from './services/charclass.service';
import { LevelsComponent } from './components/levels/levels.component';
import { OptionSetComponent } from './components/option-set/option-set.component';
import { InitialEquipmentComponent } from './components/initial-equipment/initial-equipment.component';
import { OptionSetNodeComponent } from './components/option-set-node/option-set-node.component';
import { ChoiceComponent } from './components/choice/choice.component';

@NgModule({
  declarations: [
    ProficienciesComponent,
    LevelsComponent,
    OptionSetComponent,
    InitialEquipmentComponent,
    OptionSetNodeComponent,
    ChoiceComponent
  ],
  providers: [
    CharclassService
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProficienciesComponent,
    LevelsComponent,
    InitialEquipmentComponent,
    ChoiceComponent
  ]
})
export class CharclassModule { }
