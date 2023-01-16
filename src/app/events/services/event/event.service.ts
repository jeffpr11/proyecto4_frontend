
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paginator } from 'src/app/core/interfaces/paginator.interface';
import { environment } from 'src/environments/environment';
import { GroupEvent } from '../../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  EVENT_URL: string = environment.api_main_url.concat(environment.resources.event);
  
  constructor(private http: HttpClient) { }

  public getEvents(role?: number): Observable<Paginator<GroupEvent>> {

    let params = {};
    
    if(role) {
      params = {role}; }
    
    return this.http.get<Paginator<Profile>>(
      `${this.EVENT_URL}/`,
      {params}
    );

  }

  public getProfilesByUsername(username: string): Observable<Profile> {

    let params = {username};

    return this.http.get<Profile>(`${this.EVENT_URL}/`, {params});

  }

}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }
}
