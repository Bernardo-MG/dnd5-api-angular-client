import { Component, OnInit } from '@angular/core';
import { MenuLink } from '@app/components/models/menu-link';
import { Pagination } from '@app/components/models/pagination';
import { CharclassService } from '@app/dnd5/charclass/services/charclass.service';
import { Reference } from '@app/dnd5/models/info/reference';

@Component({
  selector: 'app-charclass-list-view',
  templateUrl: './charclass-list-view.component.html',
  styleUrls: ['./charclass-list-view.component.sass']
})
export class CharclassListViewComponent implements OnInit {

  public charclasses: Reference[] = [];

  public links: MenuLink[] = [];

  public pagination = new Pagination();

  constructor(
    private charclassService: CharclassService
  ) { }

  ngOnInit(): void {
    // Loads character classes
    this.charclassService.getCharacterClasses().subscribe(charclasses => {
      this.pagination = this.loadPagination(charclasses);

      this.links = charclasses.map(c => {
        return { title: c.name, path: `/classes/${c.index}` };
      })
    });
  }

  private loadPagination(values: Reference[]): Pagination {
    const page = new Pagination();
    page.page = 1;
    page.size = 5;
    page.totalElements = values.length;
    page.totalPages = page.totalElements % page.size;
    page.first = (page.page === 1);
    page.last = (page.page === page.totalPages);

    return page;
  }

}
