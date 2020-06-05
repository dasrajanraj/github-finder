import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { pipe } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  private name: string = "Rajan Raj Das";
  private username : string = "darajanraj";
 
  constructor(private http : Http) {
    console.log("Github service ready ...");
    this.name = 'Rajan Raj Das';
    this.username = 'dasrajanraj';
  }

  getUsers(){
    return this.http.get('http://api.github.com/search/users?q='+this.name)
    .pipe(map((res:any) => res.json()));
  }
  getUser(){
    return this.http.get('http://api.github.com/users/'+this.username)
    .pipe(map((res:any) => res.json()));
  }
  getRepos(){
    return this.http.get('http://api.github.com/users/'+this.username+'/repos')
    .pipe(map(res => res.json()));
  }



}
