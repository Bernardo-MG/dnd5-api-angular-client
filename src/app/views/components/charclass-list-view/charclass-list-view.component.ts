import { Component, OnInit } from '@angular/core';
import { CharclassService } from '@app/dnd5/charclass/services/charclass.service';
import { Reference } from '@app/dnd5/models/info/reference';
import { MenuLink } from '@app/layout/models/menu-link';
import { link } from 'fs';

@Component({
  selector: 'app-charclass-list-view',
  templateUrl: './charclass-list-view.component.html',
  styleUrls: ['./charclass-list-view.component.sass']
})
export class CharclassListViewComponent implements OnInit {

  charclasses: Reference[] = [];

  links: MenuLink[] = [];

  constructor(
    private charclassService: CharclassService
  ) { }

  ngOnInit(): void {
    // Loads character classes
    this.charclassService.getCharacterClasses().subscribe(charclasses => this.links = charclasses.map(c => {
      return {name: c.name, path: `/classes/${c.index}`};
    }));
  }

}
