import { Component, OnInit } from '@angular/core';
import { Charclass } from '../charclass';
import { CharclassService } from '../charclass.service';

@Component({
  selector: 'app-charclass',
  templateUrl: './charclass.component.html',
  styleUrls: ['./charclass.component.sass']
})
export class CharclassComponent implements OnInit {

  charclasses: Charclass[];

  selectedCharClass: Charclass;

  constructor(private charclassService: CharclassService) { }

  ngOnInit(): void {
    this.getCharClasses();
  }

  onSelect(charclass: Charclass): void {
    this.selectedCharClass = charclass;
  }

  getCharClasses(): void {
    this.charclassService.getCharClasses().subscribe(charclasses => this.charclasses = charclasses);
  }

}
