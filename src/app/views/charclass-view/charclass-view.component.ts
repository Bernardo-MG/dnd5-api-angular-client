import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Charclass } from '@app/charclass/models/charclass';
import { Reference } from '@app/charclass/models/reference';
import { CharclassService } from '@app/charclass/services/charclass.service';

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
