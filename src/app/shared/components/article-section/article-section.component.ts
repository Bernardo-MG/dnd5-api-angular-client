import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-article-section',
  templateUrl: './article-section.component.html',
  styleUrls: ['./article-section.component.sass']
})
export class ArticleSectionComponent {

  /**
   * Article heading text.
   */
  @Input() public heading = '';

}
