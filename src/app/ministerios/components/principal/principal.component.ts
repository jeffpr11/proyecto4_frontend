
import { Component, OnInit } from '@angular/core';
import { Paginator } from 'src/app/core/interfaces/paginator.interface';
import { Ministry } from '../../interfaces/ministry.interface';
import { GroupService } from '../../services/ministry/group.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  ministries: Ministry[];
  constructor(private groupService: GroupService) { }

  ngOnInit(): void {

    this.groupService.getMainGroups().subscribe({
      next: (page: Paginator<Ministry>) => this.ministries = page.results,
      error: console.log
    });

  }

}
