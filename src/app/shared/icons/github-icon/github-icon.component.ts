import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

/**
 * Github icon.
 */
@Component({
  selector: 'shared-github-icon',
  templateUrl: './github-icon.component.html',
  styleUrls: ['./github-icon.component.sass']
})
export class GithubIconComponent {

  /**
   * Wrapped Font Awesome icon.
   */
  public icon = faGithub;

}
