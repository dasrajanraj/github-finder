import { Component } from '@angular/core';
import { GithubServiceService } from '../app/github-service.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubServiceService]
})
export class AppComponent {
  title = 'githubfinder';
}
