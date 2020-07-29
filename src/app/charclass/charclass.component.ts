import { Component, OnInit } from '@angular/core';
import { Charclass } from '../charclass';
import { CHARCLASSES } from '../mock-charclasses';

@Component({
  selector: 'app-charclass',
  templateUrl: './charclass.component.html',
  styleUrls: ['./charclass.component.sass']
})
export class CharclassComponent implements OnInit {

  charclasses = CHARCLASSES;

  constructor() { }

  ngOnInit(): void {
  }

}
