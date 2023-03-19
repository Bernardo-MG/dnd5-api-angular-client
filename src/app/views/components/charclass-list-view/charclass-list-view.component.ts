import { Component, OnInit } from '@angular/core';
import { CharclassService } from '@app/dnd5/charclass/services/charclass.service';
import { Reference } from '@app/dnd5/models/info/reference';
import { MenuLink } from '@app/components/models/menu-link';
import { PaginationDetails } from '@app/components/models/pagination-details';

@Component({
  selector: 'app-charclass-list-view',
  templateUrl: './charclass-list-view.component.html',
  styleUrls: ['./charclass-list-view.component.sass']
})
export class CharclassListViewComponent implements OnInit {

  public charclasses: Reference[] = [];

  public links: MenuLink[] = [];

  public pagination = new PaginationDetails();

  constructor(
    private charclassService: CharclassService
  ) { }

  ngOnInit(): void {
    // Set up pagination
    this.pagination.first = true;
    this.pagination.last = false;
    this.pagination.current = 2;
    this.pagination.firstHalf = [1, 2, 3];
    this.pagination.secondHalf = [10];

    // Loads character classes
    this.charclassService.getCharacterClasses().subscribe(charclasses => this.links = charclasses.map(c => {
      return { title: c.name, path: `/classes/${c.index}` };
    }));
  }

}
