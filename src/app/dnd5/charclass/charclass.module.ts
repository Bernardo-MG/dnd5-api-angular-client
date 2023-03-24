import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProficienciesComponent } from './components/proficiencies/proficiencies.component';
import { ProficiencyChoicesComponent } from './components/proficiency-choices/proficiency-choices.component';
import { CharclassService } from './services/charclass.service';
import { LevelsComponent } from './components/levels/levels.component';

@NgModule({
  declarations: [
    ProficienciesComponent,
    ProficiencyChoicesComponent,
    LevelsComponent
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
    ProficiencyChoicesComponent,
    LevelsComponent
  ]
})
export class CharclassModule { }
