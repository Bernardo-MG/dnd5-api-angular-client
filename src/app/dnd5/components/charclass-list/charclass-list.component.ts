import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharacterClassSummary } from '@app/dnd5/models/character-class-summary';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-charclass-list',
  imports: [CommonModule, RouterLink, TableModule],
  templateUrl: './charclass-list.component.html'
})
export class CharclassListComponent {

  @Input() public classes: CharacterClassSummary[] = [];

}
