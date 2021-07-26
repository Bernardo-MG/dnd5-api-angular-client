import { Component, OnInit } from '@angular/core';
import { Charclass } from '../../models/charclass';
import { CharclassService } from '../../services/charclass.service';

@Component({
  selector: 'app-charclass',
  templateUrl: './charclass.component.html',
  styleUrls: ['./charclass.component.sass']
})
export class CharclassComponent implements OnInit {

  charclasses: Charclass[] = [];

  constructor(private charclassService: CharclassService) { }

  ngOnInit(): void {
    // Loads character classes
    this.charclassService.getCharClasses().subscribe(charclasses => this.charclasses = charclasses);
  }

}
