import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProficienciesComponent } from './components/proficiencies/proficiencies.component';
import { CharclassService } from './services/charclass.service';
import { LevelsComponent } from './components/levels/levels.component';
import { ChoicesComponent } from './components/choices/choices.component';
import { OptionSetComponent } from './components/option-set/option-set.component';

@NgModule({
  declarations: [
    ProficienciesComponent,
    LevelsComponent,
    ChoicesComponent,
    OptionSetComponent
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
    ChoicesComponent
  ]
})
export class CharclassModule { }
