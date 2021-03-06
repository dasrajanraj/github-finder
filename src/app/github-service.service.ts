import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { pipe } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  private name: string = "Rajan Raj Das";
  private client_id = 'Iv1.03a5ff199a8b299a';
  private client_secret = '9cb9faa7a013a57078d8c53e6c32750d64892afc';
 
  constructor(private http : Http) {
    console.log("Github service ready ...");
    this.name = 'Rajan Raj Das';
  }

  getUsers(){
    return this.http.get('http://api.github.com/search/users?q='+this.name+'&client_id='+this.client_id+'&client_secret='+this.client_secret)
    .pipe(map((res:any) => res.json()));
  }
  getUser(user : string){
    return this.http.get('http://api.github.com/users/'+user+'?client_id='+this.client_id+'&client_secret='+this.client_secret).pipe(map((res:any) => res.json()));
  }
  getRepos(username : string){
    return this.http.get('http://api.github.com/users/'+username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).pipe( map((res:any) => res.json()));
  }

  updateName(name : string){
    this.name = name;
  }


}
