
import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { Profile } from 'src/app/core/interfaces/profile.interface';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { GroupEvent } from '../../interfaces/event.interface';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  userProfile: Profile;
  events: GroupEvent[];

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {

    zip(
      this.profileService.getProfilesByUsername(localStorage.getItem("username")),
      
    )

  }

}
