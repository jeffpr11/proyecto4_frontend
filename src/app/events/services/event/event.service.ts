
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paginator } from 'src/app/core/interfaces/paginator.interface';
import { environment } from 'src/environments/environment';
import { GroupEvent } from '../../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  EVENT_URL: string = environment.api_main_url.concat(environment.resources.event);
  
  constructor(private http: HttpClient) { }

  public getEvents(): Observable<Paginator<GroupEvent>> {

    let params = {};
    
    return this.http.get<Paginator<GroupEvent>>(
      `${this.EVENT_URL}/`,
      { params }
    );

  }

}
