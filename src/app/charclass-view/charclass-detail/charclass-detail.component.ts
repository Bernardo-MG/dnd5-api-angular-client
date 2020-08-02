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
    this.getCharClass();
  }

  getCharClass(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.charclassService.getCharClass(id)
        .subscribe(charclass => this.charclass = charclass);
    }
  }

}
