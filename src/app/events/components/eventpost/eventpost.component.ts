
import * as moment from 'moment';
import { Component, Input, OnInit } from '@angular/core';
import { GroupEvent } from '../../interfaces/event.interface';

@Component({
  selector: 'events-eventposts',
  templateUrl: './eventpost.component.html',
  styleUrls: ['./eventpost.component.scss']
})
export class EventpostComponent implements OnInit {

  @Input() eventList: GroupEvent[];

  moment: any = moment;

  constructor() { 
    
    moment.locale('es');
    
  }

  ngOnInit(): void {
  }

}
