import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Charclass } from '../../models/charclass';
import { CharclassService } from '../../services/charclass.service';

@Component({
  selector: 'app-charclass',
  templateUrl: './charclass.component.html',
  styleUrls: ['./charclass.component.sass']
})
export class CharclassComponent implements OnInit {

  charclasses: Charclass[] = [];
  
  charclass!: Charclass;

  constructor(
    private route: ActivatedRoute,
    private charclassService: CharclassService
  ) { }

  ngOnInit(): void {
    // Loads character classes
    this.charclassService.getCharClasses().subscribe(charclasses => this.charclasses = charclasses);

    // Loads selected character class
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

}
