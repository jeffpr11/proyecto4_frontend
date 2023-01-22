import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'events-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.scss']
})
export class AddeventComponent implements OnInit {

  eventFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public buildForm() {
    
    this.eventFormGroup = this.formBuilder.group({
      name: ['', [
        Validators.required, Validators.minLength(4), Validators.maxLength(50)
      ]],
      date_start: ['', [
        Validators.required
      ]],
      date_end: ['', [
        Validators.required
      ]],
      // group_leader: ['Seleccione al lider de ' + this.groupName?.toLowerCase(), [
      //   Validators.required, 
      //   Validators.min(1), 
      //   Validators.pattern('^[1-9]+$')]
      // ]
    });

  }

}
