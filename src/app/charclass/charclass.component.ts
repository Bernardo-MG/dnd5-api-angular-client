import { Component, OnInit } from '@angular/core';
import { Charclass } from '../charclass';

@Component({
  selector: 'app-charclass',
  templateUrl: './charclass.component.html',
  styleUrls: ['./charclass.component.sass']
})
export class CharclassComponent implements OnInit {

  charclass: Charclass = {
    id: 1,
    name: 'Name'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
