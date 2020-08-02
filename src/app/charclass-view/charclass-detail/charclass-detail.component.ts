import { Component, OnInit, Input } from '@angular/core';
import { Charclass } from '../../charclass';
import { ActivatedRoute } from '@angular/router';
import { CharclassService } from '../../charclass.service';

@Component({
  selector: 'app-charclass-detail',
  templateUrl: './charclass-detail.component.html',
  styleUrls: ['./charclass-detail.component.sass']
})
export class CharclassDetailComponent implements OnInit {

  @Input() charclass: Charclass;

  constructor(
    private route: ActivatedRoute,
    private charclassService: CharclassService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getCharClass(params['id']);
    });
  }

  getCharClass(id: string): void {
    if (id) {
      this.charclassService.getCharClass(id)
        .subscribe(charclass => this.charclass = charclass);
    }
  }

  getSavingThrowNames(): string[] {
    return this.charclass.saving_throws.map(obj => obj.name);
  }

  getSubclassesNames(): string[] {
    return this.charclass.subclasses.map(obj => obj.name);
  }

  getProficienciesNames(): string[] {
    return this.charclass.subclasses.map(obj => obj.name);
  }

  getProficiencyNames(): string[] {
    return this.charclass.proficiencies.map(obj => obj.name);
  }

  getProficiencyChoiceNames(): string[] {
    return this.charclass.proficiency_choices.map(obj => obj.type);
  }

}
