import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from 'src/app/github-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string;
  users : any;
  repos: any[];
  username: string;
  searchUsername : string;
  constructor(private gitService : GithubServiceService) { }

  ngOnInit(): void {
  }
  searchUser(){
    console.log(this.name);
    this.gitService.updateName(this.name);

    this.gitService.getUsers().subscribe(res =>{
      this.users = res;
      console.log(this.users);
    })
  }

}
