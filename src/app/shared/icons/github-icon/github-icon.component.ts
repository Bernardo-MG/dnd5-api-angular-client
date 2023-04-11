import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'shared-github-icon',
  templateUrl: './github-icon.component.html',
  styleUrls: ['./github-icon.component.sass']
})
export class GithubIconComponent {

  public icon = faGithub;

}
