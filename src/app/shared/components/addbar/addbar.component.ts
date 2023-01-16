
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addbar',
  templateUrl: './addbar.component.html',
  styleUrls: ['./addbar.component.scss']
})
export class AddbarComponent implements OnInit {

  @Input() addUrl: string;
  @Input() filterField: string;
  @Input() buttonLegend: string;

  @Output() filterEvent: EventEmitter<string> 
    = new EventEmitter<string>();

  filterBox: FormControl;

  constructor() { 
    
    this.filterBox = new FormControl('', [Validators.required, Validators.minLength(4)]);

  }

  ngOnInit(): void {
  }

  public emmitFilter(event: KeyboardEvent) {
    
    let pressedKey: string = event.key.toUpperCase();
    let validKey = (pressedKey.match(/^.$/) || pressedKey === 'BACKSPACE');
    
    if(
      ((this.filterBox.valid) && validKey) 
      || (this.filterBox.value.length == 0) && validKey) {
      this.filterEvent.emit(
        (event.target as HTMLInputElement).value
      ); }

  }

}
