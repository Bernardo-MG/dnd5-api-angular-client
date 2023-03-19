import { Component, OnInit } from '@angular/core';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dnd5-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  public backwardIcon = faBackward;

  public forwardIcon = faForward;

  constructor() { }

  ngOnInit(): void {
  }

}
