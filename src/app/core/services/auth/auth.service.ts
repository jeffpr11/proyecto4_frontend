
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserCredentials } from '../../interfaces/user.credentials.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpOptions: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

    this.httpOptions = {
      headers: new HttpHeaders({"Content-Type": "application/json"})
    }

  }

  public login(user: UserCredentials, next: string) {

    return new Promise( (res, rej) => {

      this.http.post(
        `${environment.api_main_url}/token/`, user, this.httpOptions)
        .subscribe({
          next: (token: any) => {

            this.setData(token.token);
            res("Login Success!");
            this.router.navigate([next]);
            
          }, error: (err) => rej(err.error)
      });

    });

  }

  public logout() {

    localStorage.removeItem("exp");
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("roles");
    localStorage.removeItem("username");

  }

  public isAuthenticated() {
    
    return localStorage.getItem("token") ? true : false;

  }

  private setData(token: string) {

    let payload = JSON.parse( window.atob(token.split('.')[1]) );
    localStorage.setItem("token", token);
    localStorage.setItem("exp", payload.exp);
    localStorage.setItem("name", payload.name);
    localStorage.setItem("username", payload.name);
    localStorage.setItem("roles", payload.roles ? payload.roles : []);

  }
  
  public hasRole(role: string) {

    let roles = localStorage.getItem("roles");

    return roles ? roles.split(",").includes(role) : false;

  }

  public hasRoles(roles: Array<string>) {

    let roleList: any;

    if( localStorage.getItem("roles") ) {
      roleList = localStorage.getItem("roles")?.split(","); }

    return roles.map( role => roleList.includes(role) ).reduce( (a, b) => a && b );

  }

}
