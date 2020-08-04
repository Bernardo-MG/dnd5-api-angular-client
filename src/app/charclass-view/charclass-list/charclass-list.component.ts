import { Component, OnInit } from '@angular/core';
import { Charclass } from '../../charclass';
import { CharclassService } from '../../charclass.service';

@Component({
  selector: 'app-charclass-list',
  templateUrl: './charclass-list.component.html',
  styleUrls: ['./charclass-list.component.sass']
})
export class CharclassListComponent implements OnInit {

  charclasses: Charclass[];

  constructor(private charclassService: CharclassService) { }

  ngOnInit(): void {
    this.getCharClasses();
  }

  getCharClasses(): void {
    this.charclassService.getCharClasses().subscribe(charclasses => this.charclasses = charclasses);
  }

}
