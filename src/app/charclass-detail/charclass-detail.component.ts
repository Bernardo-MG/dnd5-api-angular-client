import { Component, OnInit, Input } from '@angular/core';
import { Charclass } from '../charclass';

@Component({
  selector: 'app-charclass-detail',
  templateUrl: './charclass-detail.component.html',
  styleUrls: ['./charclass-detail.component.sass']
})
export class CharclassDetailComponent implements OnInit {

  @Input() charclass: Charclass;

  constructor() { }

  ngOnInit(): void {
  }

}
