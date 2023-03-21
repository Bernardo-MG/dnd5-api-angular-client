import { Component, OnInit } from '@angular/core';
import { MenuLink } from '@app/components/models/menu-link';
import { Pagination } from '@app/components/models/pagination';
import { CharclassService } from '@app/dnd5/charclass/services/charclass.service';

@Component({
  selector: 'dnd5-charclass-list-view',
  templateUrl: './charclass-list-view.component.html',
  styleUrls: ['./charclass-list-view.component.sass']
})
export class CharclassListViewComponent implements OnInit {

  public waiting = false;

  public data: MenuLink[] = [];

  public links: MenuLink[] = [];

  public pagination = new Pagination();

  constructor(
    private charclassService: CharclassService
  ) { }

  ngOnInit(): void {
    this.waiting = true;

    // Loads character classes
    this.charclassService.getCharacterClasses().subscribe(data => {
      this.pagination = this.loadPagination(data.length);

      this.data = data.map(c => {
        return { title: c.name, path: `/classes/${c.index}` };
      });

      this.links = this.data.slice(0, this.pagination.size);

      this.waiting = false;
    });
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
