import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent {

  @Input() public title = '';

  @Input() public waiting = false;

}
