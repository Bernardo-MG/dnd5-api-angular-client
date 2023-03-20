import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharclassService } from '@app/dnd5/charclass/services/charclass.service';
import { Charclass } from '@app/dnd5/models/charclass/charclass';

@Component({
  selector: 'dnd5-charclass-detail-view',
  templateUrl: './charclass-detail-view.component.html',
  styleUrls: ['./charclass-detail-view.component.sass']
})
export class CharclassDetailViewComponent implements OnInit {
  
  charclass: Charclass = new Charclass();

  constructor(
    private route: ActivatedRoute,
    private charclassService: CharclassService
  ) { }

  ngOnInit(): void {
    // Loads selected character class
    this.route.paramMap.subscribe(params => {
      this.getCharClass(params.get('id'));
    });
  }

  getCharClass(id: string | null): void {
    if (id) {
      this.charclassService.getCharacterClass(id)
        .subscribe(charclass => this.charclass = charclass);
    }
  }

}
