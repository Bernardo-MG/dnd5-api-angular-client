import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharclassService } from '@app/dnd5/charclass/services/charclass.service';
import { Charclass } from '@app/dnd5/models/charclass/charclass';
import { Proficiency } from '@app/dnd5/models/charclass/proficiency';

@Component({
  selector: 'dnd5-charclass-detail-view',
  templateUrl: './charclass-detail-view.component.html',
  styleUrls: ['./charclass-detail-view.component.sass']
})
export class CharclassDetailViewComponent implements OnInit {

  public waiting = false;

  public charclass = new Charclass();

  public proficiencies: Proficiency[] = [];

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

            this.charclassService.getProficiencies(this.charclass.proficiencies).subscribe(p => this.proficiencies = p);

            this.waiting = false;
          });

      }
    });
  }

}
