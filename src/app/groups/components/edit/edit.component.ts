import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppConfig } from 'src/app/core/interfaces/appconfig.interface';
import { Profile } from 'src/app/core/interfaces/profile.interface';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { Utils } from 'src/app/utils/utils';
import { Group } from '../../interfaces/group.interface';
import { GroupService } from '../../services/group/group.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  group: Group;
  groupName: string;
  groupParent: number;
  editFormGroup: FormGroup;
  leaderProfiles: Profile[];
  appConfig: AppConfig = Utils.getAppConfig();

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private groupService: GroupService,
    private toastrService: ToastrService,
    private profileService: ProfileService,
    private activateRouteService: ActivatedRoute) { }

  ngOnInit(): void {

    this.activateRouteService.params.subscribe( (params: any) => {
      
      this.groupService.getGroupById(parseInt(params.id)).subscribe({
        next: (group: Group) => {
          
          this.group = group;
          this.groupParent = group.principal_group;
          this.groupName = (group.level === 0) ? this.appConfig.mainGroupName : this.appConfig.subGroupName;
          this.buildForm();
          // this.editFormGroup.setValue(this.group);

        },
        error: console.log
      });

      this.profileService.getProfiles(1).subscribe({
        next: (page) => this.leaderProfiles = page.results,
        error: console.log
      });

      

    });

  }

  public buildForm() {
    
    this.editFormGroup = this.formBuilder.group({
      name: [this.group.name, [
        Validators.required, Validators.minLength(4), Validators.maxLength(100)
      ]],
      description: [this.group.description, [
        Validators.required, Validators.minLength(10), Validators.maxLength(100)
      ]],
      group_leader: [
        this.group.leader_details != null ?
        this.group.leader_details.id : 
        'Seleccione al lider de ' + this.groupName?.toLowerCase()
        , [
        Validators.required, 
        Validators.min(1), 
        Validators.pattern('^[1-9]+$')]
      ]
    });

  }

  public editGroup() {

    if( this.editFormGroup.valid ) {
      this.group.name = this.editFormGroup.get('name').value;
      this.group.description = this.editFormGroup.get('description').value;
      this.group.group_leader = this.editFormGroup.get('group_leader').value;
      
      this.groupService.updateGroup(this.group).subscribe({
        next: () => {},
        complete: () => this.toastrService.success("El grupo se actulizo correctamente"),
        error: (err) => Utils.getFormErrors(err.error).forEach( (e: string) => this.toastrService.error(e))
      })

    }

  }

}
