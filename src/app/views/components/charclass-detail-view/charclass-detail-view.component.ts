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

  public waiting: boolean = false;

  public charclass: Charclass = new Charclass();

  constructor(
    private route: ActivatedRoute,
    private charclassService: CharclassService
  ) { }

  ngOnInit(): void {
    this.waiting = true;

    // Loads selected character class
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.charclassService.getCharacterClass(id)
          .subscribe(data => {
            this.charclass = data;

            this.waiting = false;
          });
      }
    });
  }

}
