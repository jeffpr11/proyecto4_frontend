
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs';
import { AppConfig } from 'src/app/core/interfaces/appconfig.interface';
import { Profile } from 'src/app/core/interfaces/profile.interface';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { Utils } from 'src/app/utils/utils';
import { Group } from '../../interfaces/group.interface';
import { GroupService } from '../../services/group/group.service';

@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.scss']
})
export class AddGroupComponent implements OnInit {

  file: File;
  newGroup: Group;
  groupName: string;
  groupId: number = 0;
  leaderProfiles: Profile[];
  principalGroupForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private groupService: GroupService,
    private toastrService: ToastrService,
    private profileService: ProfileService,
    private activateRouteService: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activateRouteService.params.subscribe( params => {
    
      let appConfig: AppConfig = Utils.getAppConfig(),
        urlRegExp = new RegExp(`^\/${appConfig.mainGroupName.toLowerCase()}\/\\d+\/add$`);
      
      this.groupId = urlRegExp.test(this.router.url) ? parseInt(this.router.url.split('/').at(2)) : 0;
      this.groupName = this.groupId === 0 ? appConfig.mainGroupName : appConfig.subGroupName;
      this.buildForm();

      this.profileService.getProfiles(1).subscribe({
        next: (page) => this.leaderProfiles = page.results,
        error: console.log
      });
      
    });
    
  }

  public loadGroupImage(event: any) {
    
    if (event.target.files.length > 0) {
      this.file = event.target.files[0]; }

  }

  public buildForm() {
    
    this.principalGroupForm = this.formBuilder.group({
      name: ['', [
        Validators.required, Validators.minLength(4), Validators.maxLength(50)
      ]],
      description: ['', [
        Validators.required, Validators.minLength(10), Validators.maxLength(1000)
      ]],
      group_image: ['', [
        Validators.required
      ]],
      group_leader: ['Seleccione al lider de ' + this.groupName?.toLowerCase(), [
        Validators.required, 
        Validators.min(1), 
        Validators.pattern('^[1-9]+$')]
      ]
    });

  }

  public addGroup() {

    if( this.principalGroupForm.valid ) {

      this.newGroup = this.principalGroupForm.value;
      this.newGroup.group_image_file = this.file;
      
      this.newGroup.level = 0;
      this.newGroup.principal_group = this.groupId == 0 ? null : this.groupId;
      
      let groupRequest = this.groupId == 0 ? 
        this.groupService.addGroup(this.newGroup) :
        this.groupService.getGroupById(this.groupId).pipe(
          switchMap( (group: Group) => {
            this.newGroup.level = group.level + 1;
            return this.groupService.addGroup(this.newGroup)
          })
        );
      
      groupRequest.subscribe({
        next: (group) => {},
        error: (err) => Utils.getFormErrors(err.error).forEach( (e: string) => this.toastrService.error(e)),
        complete: () => {
          this.toastrService.success("El grupo se agrego exitosamente");
          this.router.navigate(['/', Utils.getAppConfig().mainGroupName.toLowerCase(), this.groupId == 0 ? '' : this.groupId])
        }
      });
      
    }

  }

}
