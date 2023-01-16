import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emptypage',
  templateUrl: './emptypage.component.html',
  styleUrls: ['./emptypage.component.scss']
})
export class EmptypageComponent implements OnInit {

  @Input() message: string = 'No existen elementos que mostrar';
  @Input() iconClass: string = 'fas fa-trash-alt'

  constructor() { }

  ngOnInit(): void {
  }

}
