
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomDateValidator } from 'src/app/core/validators/CustomDateValidator';
import { GroupEvent } from '../../interfaces/event.interface';

import * as moment from 'moment-timezone';
import { EventService } from '../../services/event/event.service';
import { Utils } from 'src/app/utils/utils';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'events-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.scss']
})
export class AddeventComponent implements OnInit {

  @Output() newGroupEvent: EventEmitter<GroupEvent> 
    = new EventEmitter<GroupEvent>();

  file: File;
  event: GroupEvent;
  moment: any = moment;
  eventFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {

    this.buildForm();

  }

  public addEvent() {

    if (this.eventFormGroup.valid) {

      this.event = this.eventFormGroup.value;
      this.event.event_image_file = this.file;
      this.eventService.addEvent(this.event).subscribe({
        next: (event: GroupEvent) => {
          this.event = event;
        },
        error: (err: any) => Utils.getFormErrors(err.error).forEach( (e: string) => this.toastrService.error(e)),
        complete: () => {
          this.toastrService.success("El evento se registro adecuadamente")
          this.eventFormGroup.reset();
          this.newGroupEvent.emit(this.event);
        }
      })

    }

  }

  public loadEventImage(event: any) {

    if (event.target.files.length > 0) {
      
      this.file = event.target.files[0];
    
    }

  }

  public buildForm() {

    this.eventFormGroup = this.formBuilder.group({
      name: ['', [
        Validators.required, Validators.minLength(4), Validators.maxLength(50)
      ]],
      description: ['', [
        Validators.required, Validators.minLength(10), Validators.maxLength(2000)
      ]],
      date_start: [moment(new Date(), moment.HTML5_FMT.DATETIME_LOCAL).format().substring(0, 16), [
        Validators.required, CustomDateValidator.LessThanToday
      ]],
      date_end: [moment(new Date(), moment.HTML5_FMT.DATETIME_LOCAL).add(30, 'minute').format().substring(0, 16), [
        Validators.required, CustomDateValidator.LessThanToday
      ]],
      event_image: ['', [
        Validators.required
      ]],
      capacity: ['', [
        Validators.required, Validators.min(0)
      ]],

    });

  }

}
