import { Component, OnInit } from '@angular/core';
import { CharclassService } from '@app/dnd5/charclass/services/charclass.service';
import { Reference } from '@app/dnd5/models/info/reference';
import { MenuLink } from '@app/components/models/menu-link';

@Component({
  selector: 'app-charclass-list-view',
  templateUrl: './charclass-list-view.component.html',
  styleUrls: ['./charclass-list-view.component.sass']
})
export class CharclassListViewComponent implements OnInit {

  public charclasses: Reference[] = [];

  public links: MenuLink[] = [];

  public first = true;

  public last = false;

  public current = 2;

  public firstHalf: number[] = [1,2,3];

  public secondHalf: number[] = [10];

  constructor(
    private charclassService: CharclassService
  ) { }

  ngOnInit(): void {
    // Loads character classes
    this.charclassService.getCharacterClasses().subscribe(charclasses => this.links = charclasses.map(c => {
      return { title: c.name, path: `/classes/${c.index}` };
    }));
  }

}
