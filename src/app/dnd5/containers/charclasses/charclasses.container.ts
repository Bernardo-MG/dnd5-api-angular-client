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

@Component({
  selector: 'app-charclasses',
  imports: [CommonModule, CharclassListComponent, CardModule, LevelsComponent, ChoiceComponent, ProficienciesComponent, InitialEquipmentComponent],
  templateUrl: './charclasses.container.html'
})
export class CharclassesComponent {

  public waiting = false;

  public classes: CharacterClassSummary[] = [];

  public pagination = new Pagination();

  public charclass: Charclass | undefined;

  constructor(
    charclassService: CharclassService,
    route: ActivatedRoute
  ) {
    this.waiting = true;

    // Loads character classes
    charclassService.getCharacterClassList().subscribe(data => {
      this.pagination = this.loadPagination(data.length);
      this.classes = data;
      this.waiting = false;
    });

    // TODO: the class should contain everything, the service should take care of it
    route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.waiting = true;
        charclassService.getCharacterClass(id)
          .subscribe(data => {
            this.charclass = data;
            this.waiting = false;
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
