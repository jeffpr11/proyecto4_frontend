
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profile } from 'src/app/core/interfaces/profile.interface';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { GroupService } from '../../services/ministry/group.service';

@Component({
  selector: 'app-addministry',
  templateUrl: './addministry.component.html',
  styleUrls: ['./addministry.component.scss']
})
export class AddMinistryComponent implements OnInit {

  leaderProfiles: Profile[];
  principalGroupForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private groupService: GroupService,
    private profileService: ProfileService) {

      this.buildForm();
      profileService.getProfiles(1).subscribe({
        next: (page) => this.leaderProfiles = page.results,
        error: console.log
      });

  }

  ngOnInit(): void {
  }

  public buildForm() {
    
    this.principalGroupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      group_leader: ['Seleccione al lider de ministerio', [
        Validators.required, 
        Validators.min(1), 
        Validators.pattern('^[1-9]+$')]
      ]
    });

  }

  public addMainGroup() {

    if( this.principalGroupForm.valid ) {

      this.groupService.addMainGroup(this.principalGroupForm.value)
      .subscribe({
        next: (group) => {},
        error: (err) => console.log(err),
        complete: () => this.router.navigate(['/ministerio'])
      });

    }

  }

}
