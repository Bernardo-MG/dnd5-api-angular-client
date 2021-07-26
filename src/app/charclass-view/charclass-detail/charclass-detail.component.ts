import { Component, OnInit, Input } from '@angular/core';
import { Charclass } from '../../models/charclass';
import { ActivatedRoute } from '@angular/router';
import { CharclassService } from '../../charclass.service';

@Component({
  selector: 'app-charclass-detail',
  templateUrl: './charclass-detail.component.html',
  styleUrls: ['./charclass-detail.component.sass']
})
export class CharclassDetailComponent implements OnInit {

  @Input() charclass!: Charclass;

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

  asList(data: any[]) {
    return data.map(obj => obj.name);
  }

}
