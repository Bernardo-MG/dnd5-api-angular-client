import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharclassService } from '@app/dnd5/charclass/services/charclass.service';
import { Charclass } from '@app/dnd5/models/charclass';
import { Reference } from '@app/dnd5/models/reference';

@Component({
  selector: 'dnd5-charclass-view',
  templateUrl: './charclass-view.component.html',
  styleUrls: ['./charclass-view.component.sass']
})
export class CharclassViewComponent implements OnInit {

  charclasses: Reference[] = [];
  
  charclass!: Charclass;

  constructor(
    private route: ActivatedRoute,
    private charclassService: CharclassService
  ) { }

  ngOnInit(): void {
    // Loads character classes
    this.charclassService.getCharClasses().subscribe(charclasses => this.charclasses = charclasses);

    // Loads selected character class
    this.route.paramMap.subscribe(params => {
      this.getCharClass(params.get('id'));
    });
  }

  getCharClass(id: string | null): void {
    if (id) {
      this.charclassService.getCharClass(id)
        .subscribe(charclass => this.charclass = charclass);
    }
  }

}
