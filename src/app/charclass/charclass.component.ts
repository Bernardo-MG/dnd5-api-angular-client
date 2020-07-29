import { Component, OnInit } from '@angular/core';
import { Charclass } from '../charclass';
import { CharclassService } from '../charclass.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-charclass',
  templateUrl: './charclass.component.html',
  styleUrls: ['./charclass.component.sass']
})
export class CharclassComponent implements OnInit {

  charclasses: Charclass[];

  selectedCharClass: Charclass;

  constructor(private charclassService: CharclassService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getCharClasses();
  }

  onSelect(charclass: Charclass): void {
    this.selectedCharClass = charclass;
    this.messageService.add(`CharclassComponent: Selected charclass index=${charclass.index}`);
  }

  getCharClasses(): void {
    this.charclassService.getCharClasses().subscribe(charclasses => this.charclasses = charclasses);
  }

}
