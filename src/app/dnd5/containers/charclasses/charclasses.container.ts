import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChoiceComponent } from '@app/dnd5/components/choice/choice.component';
import { InitialEquipmentComponent } from '@app/dnd5/components/initial-equipment/initial-equipment.component';
import { LevelsComponent } from '@app/dnd5/components/levels/levels.component';
import { ProficienciesComponent } from '@app/dnd5/components/proficiencies/proficiencies.component';
import { Charclass } from '@app/dnd5/models/charclass/charclass';
import { Level } from '@app/dnd5/models/charclass/level';
import { Proficiency } from '@app/dnd5/models/charclass/proficiency';
import { LinkListComponent } from '@app/shared/components/link-list/link-list.component';
import { CardModule } from 'primeng/card';
import { Pagination } from '../../../core/api/models/pagination';
import { Link } from '../../../shared/model/link';
import { CharclassService } from '../../services/charclass.service';

@Component({
  selector: 'app-charclasses',
  imports: [CommonModule, LinkListComponent, CardModule, LevelsComponent, ChoiceComponent, ProficienciesComponent, InitialEquipmentComponent],
  templateUrl: './charclasses.container.html'
})
export class CharclassesComponent {

  public waiting = false;

  public data: Link[] = [];

  public links: Link[] = [];

  public pagination = new Pagination();

  public charclass: Charclass | undefined;

  public proficiencies: Proficiency[] = [];

  public levels: Level[] = [];

  private waitingProficiencies = false;

  private waitingLevels = false;

  constructor(
    charclassService: CharclassService,
    route: ActivatedRoute
  ) {
    this.waiting = true;

    // Loads character classes
    charclassService.getCharacterClasses().subscribe(data => {
      this.pagination = this.loadPagination(data.length);

      this.data = data.map(c => {
        return { title: c.name, route: `/classes/${c.index}` };
      });

      this.links = this.data.slice(0, this.pagination.size);

      this.waiting = false;
    });

    // TODO: the class should contain everything, the service should take care of it
    route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.waitingProficiencies = true;
        this.waitingLevels = true;
        charclassService.getCharacterClass(id)
          .subscribe(data => {
            this.charclass = data;

            charclassService.getProficiencies(this.charclass.proficiencies).subscribe(p => {
              this.proficiencies = p;
              this.waitingProficiencies = false;
              this.checkWaiting();
            });
            charclassService.getLevels(id).subscribe(l => {
              this.levels = l;
              this.waitingLevels = false;
              this.checkWaiting();
            });
          });

      }
    });
  }

  public onGoToPage(page: number) {
    const lower = (page - 1) * this.pagination.size;
    const upper = page * this.pagination.size;
    this.links = this.data.slice(lower, upper);
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

  private checkWaiting() {
    this.waiting = (this.waitingProficiencies || this.waitingLevels);
  }

}
