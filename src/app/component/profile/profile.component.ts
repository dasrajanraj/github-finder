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
    setTimeout(()=>{
        console.log(this.name);
        this.gitService.updateName(this.name);
        
        this.gitService.getUsers().subscribe(res =>{
          this.users = res.items;
          this.users = this.users.map((user,i) =>{ 
            this.gitService.getUser(user.login).subscribe(res=> this.users[i] = res );
          })
          console.log(this.users);
        })
        
    },1500)
    
  }
  onProfileSelect(user){
    console.log("A user clicked ")
    console.log(user);
  }

}
