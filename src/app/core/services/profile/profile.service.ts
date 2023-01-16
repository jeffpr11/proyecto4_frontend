
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paginator } from '../../interfaces/paginator.interface';
import { Profile } from '../../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  PROFILE_URL: string = environment.api_main_url.concat(environment.resources.profile);
  
  constructor(private http: HttpClient) { }

  public getProfiles(role?: number): Observable<Paginator<Profile>> {

    let params = {};
    
    if(role) {
      params = {role}; }
    
    return this.http.get<Paginator<Profile>>(
      `${this.PROFILE_URL}/`,
      {params}
    );

  }

}
