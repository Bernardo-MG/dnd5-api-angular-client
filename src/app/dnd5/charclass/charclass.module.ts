import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProficienciesComponent } from './components/proficiencies/proficiencies.component';
import { ProficiencyChoicesComponent } from './components/proficiency-choices/proficiency-choices.component';
import { CharclassService } from './services/charclass.service';

@NgModule({
  declarations: [
    ProficienciesComponent,
    ProficiencyChoicesComponent
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
    ProficiencyChoicesComponent
  ]
})
export class CharclassModule { }
