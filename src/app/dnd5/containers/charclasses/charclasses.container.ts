import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pagination } from '@app/core/api/models/pagination';
import { CharclassListComponent } from '@app/dnd5/components/charclass-list/charclass-list.component';
import { ChoiceComponent } from '@app/dnd5/components/choice/choice.component';
import { InitialEquipmentComponent } from '@app/dnd5/components/initial-equipment/initial-equipment.component';
import { LevelsComponent } from '@app/dnd5/components/levels/levels.component';
import { ProficienciesComponent } from '@app/dnd5/components/proficiencies/proficiencies.component';
import { CharacterClassSummary } from '@app/dnd5/models/character-class-summary';
import { Charclass } from '@app/dnd5/models/charclass';
import { CharclassService } from '@app/dnd5/services/charclass.service';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-charclasses',
  imports: [CommonModule, ProgressSpinnerModule, CharclassListComponent, CardModule, LevelsComponent, ChoiceComponent, ProficienciesComponent, InitialEquipmentComponent],
  templateUrl: './charclasses.container.html'
})
export class CharclassesComponent {

  public waitingClasses = false;

  public waitingClass = false;

  public loadedClass = false;

  public classes: CharacterClassSummary[] = [];

  public pagination = new Pagination();

  public charclass = new Charclass();

  constructor(
    charclassService: CharclassService,
    route: ActivatedRoute
  ) {
    this.waitingClasses = true;

    // Loads character classes
    charclassService.getCharacterClassList().subscribe(data => {
      this.pagination = this.loadPagination(data.length);
      this.classes = data;
      this.waitingClasses = false;
    });

    // TODO: the class should contain everything, the service should take care of it
    route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.waitingClass = true;
        this.loadedClass = false;
        charclassService.getCharacterClass(id)
          .subscribe(data => {
            this.charclass = data;
            this.waitingClass = false;
            this.loadedClass = true;
          });

      }
    });
  }

  public onGoToPage(page: number) {
    this.pagination.page = page;
  }

  private loadPagination(total: number): Pagination {
    const page = new Pagination();
    page.page = 1;
    page.size = 5;
    page.totalElements = total;
    page.totalPages = Math.ceil(page.totalElements / page.size);
    page.first = (page.page === 1);
    page.last = (page.page === page.totalPages);

    return page;
  }

}
