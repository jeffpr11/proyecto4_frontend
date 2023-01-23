
import * as moment from 'moment';
import { Component, Input, OnInit } from '@angular/core';
import { GroupEvent } from '../../interfaces/event.interface';
import { GroupComment } from '../../interfaces/comment.interface';
import { EventService } from '../../services/event/event.service';
import { Paginator } from 'src/app/core/interfaces/paginator.interface';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'events-eventposts',
  templateUrl: './eventpost.component.html',
  styleUrls: ['./eventpost.component.scss']
})
export class EventpostComponent implements OnInit {

  @Input() eventList: GroupEvent[];

  moment: any = moment;
  commentFormControl: FormControl[];
  
  constructor(
    private eventService: EventService,
    private toastrService: ToastrService
  ) { 
    
    moment.locale('es');
    
  }

  ngOnInit(): void {
    
  }

  public getEventComments(eventId: number) {

    this.eventService.getCommentsByEventId(eventId).subscribe({
      next: (comments: Paginator<GroupComment>) => {
        this.eventList.find( 
          (event: GroupEvent) => event.id == eventId 
        ).comments = comments.results;
      }
    });
    
  }

  public enableComments(eventId: number) {

    let target: HTMLInputElement = document.getElementById(
      `event-comment-button-${eventId}`) as HTMLInputElement;

    target.click();
    
  }

  public addComment(event: any, eventId: number) {

    event.preventDefault();

    let target: HTMLInputElement = document.getElementById(`event-comment-${eventId}`) as HTMLInputElement,
      comment: GroupComment = {
        content: '',
        event: null,
        level: 0,
        user: ''
      };
    
    if( (target.value.length > 4 ) && (target.value.length < 2000) ) {

      comment.event = eventId;
      comment.content = target.value;
      
      this.eventService.addComment(comment).subscribe({
        next: (res: GroupComment) => {
          let event = this.eventList.find( (event: GroupEvent) => event.id == eventId );
          event.comments.push(res);
          event.comments.sort( (a: GroupComment, b: GroupComment) => a.id - b.id);
        },
        error: (err) => Utils.getFormErrors(err.error).forEach( (e: string) => this.toastrService.error(e)),
        complete: () => {
          
          target.value = "";
          this.toastrService.success("El comentario se agrego exitosamente");

        }
      });
    
    }

  }

}

