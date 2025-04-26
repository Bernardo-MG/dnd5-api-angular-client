import { Component } from '@angular/core';
import { Pagination } from '../../../core/api/models/pagination';
import { Link } from '../../../shared/model/link';
import { CharclassService } from '../../services/charclass.service';

@Component({
  selector: 'app-charclass-list',
  imports: [],
  templateUrl: './charclass-list.component.html',
  styleUrl: './charclass-list.component.scss'
})
export class CharclassListComponent {

  public waiting = false;

  public data: Link[] = [];

  public links: Link[] = [];

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
        return { title: c.name, route: `/classes/${c.index}` };
      });

      this.links = this.data.slice(0, this.pagination.size);

      this.waiting = false;
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

}
