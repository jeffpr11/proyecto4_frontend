
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paginator } from 'src/app/core/interfaces/paginator.interface';
import { Utils } from 'src/app/utils/utils';
import { environment } from 'src/environments/environment';
import { GroupComment } from '../../interfaces/comment.interface';
import { GroupEvent } from '../../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  MAIN_EVENT_URL: string = environment.api_main_url.concat(environment.resources.event);
  MAIN_COMMENT_URL: string = environment.api_main_url.concat(environment.resources.comment);
  
  constructor(private httpClient: HttpClient) { }

  public getEvents(): Observable<Paginator<GroupEvent>> {

    let params = {};
    
    return this.httpClient.get<Paginator<GroupEvent>>(
      `${this.MAIN_EVENT_URL}/`,
      { params }
    );

  }

  public addEvent(event: GroupEvent): Observable<GroupEvent> {

    Utils.setGeneralFields(event);

    let formData = new FormData();
    
    formData.append("name", event.name);
    formData.append("date_end", event.date_end.toString());
    formData.append("date_start", event.date_start.toString());
    formData.append("description", event.description);
    formData.append("event_image", event.event_image_file);
    formData.append("user_profile", localStorage.getItem('profile_id').toString());
    
    return this.httpClient.post<GroupEvent>(`${this.MAIN_EVENT_URL}/`, formData);

  }

  public updateEvent(event: GroupEvent): Observable<GroupEvent> {

    Utils.updateGeneralFields(event);

    let formData = new FormData();
    
    formData.append("name", event.name);
    formData.append("date_end", event.date_end.toString());
    formData.append("date_start", event.date_start.toString());
    formData.append("description", event.description);
    formData.append("event_image", event.event_image);
    formData.append("user_profile", localStorage.getItem('profile_id').toString());

    return this.httpClient.put<GroupEvent>(`${this.MAIN_EVENT_URL}/${event.id}/`, formData);

  }

  public getCommentsByEventId(eventId: number): Observable<Paginator<GroupComment>> {

    let params = {
      event: eventId
    };
    
    return this.httpClient.get<Paginator<GroupComment>>(
      `${this.MAIN_COMMENT_URL}/`,
      { params }
    );

  }
  
  public addComment(comment: GroupComment): Observable<GroupComment> {
    
    Utils.setGeneralFields(comment);

    comment.level = 0;
    comment.user = localStorage.getItem('profile_id').toString();

    return this.httpClient.post<GroupComment>(`${this.MAIN_COMMENT_URL}/`, comment);

  }
  
}
