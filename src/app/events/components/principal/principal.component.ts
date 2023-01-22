
import { zip } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/core/interfaces/profile.interface';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { GroupEvent } from '../../interfaces/event.interface';
import { EventService } from '../../services/event/event.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  userProfile: Profile;
  events: GroupEvent[];

  constructor(
    private eventService: EventService,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {

    zip(
      this.eventService.getEvents(),
      this.profileService.getProfileByUsername(localStorage.getItem("username")),
    ).subscribe({
      next: (data: any[] ) => {
        
        this.events = data[0].results;
        this.userProfile = data[1].results[0];

      }
    });

  }

}
