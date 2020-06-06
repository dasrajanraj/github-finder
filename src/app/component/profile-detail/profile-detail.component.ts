import { Component, OnInit } from '@angular/core';
import { Params , ActivatedRoute} from '@angular/router';
import { GithubServiceService } from '../../github-service.service';


@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  public username : any;

  public repos : any[];
  constructor(private gitService : GithubServiceService , 
   private route : ActivatedRoute  ) { }
  
  
  async reteriveInfo(user){
    console.log(user);
    console.log(this.username);  
    console.log(this.repos);
  }  
  ngOnInit(): void {
      let user = this.route.snapshot.params['user'];
      this.gitService.getRepos(user).subscribe( repos  => this.repos = repos);
      this.gitService.getUser(user).subscribe( info => this.username = info);
      this.reteriveInfo( user);
    }
}
