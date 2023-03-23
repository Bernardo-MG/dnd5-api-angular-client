import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharclassDetailComponent } from './components/charclass-detail/charclass-detail.component';
import { CharclassService } from './services/charclass.service';
import { ProficienciesComponent } from './components/proficiencies/proficiencies.component';
import { ProficiencyChoicesComponent } from './components/proficiency-choices/proficiency-choices.component';

@NgModule({
  declarations: [
    CharclassDetailComponent,
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
    CharclassDetailComponent
  ]
})
export class CharclassModule { }
