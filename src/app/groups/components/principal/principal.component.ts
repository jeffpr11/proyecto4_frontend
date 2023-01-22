
import { Component, Input, OnInit } from '@angular/core';
import { Paginator } from 'src/app/core/interfaces/paginator.interface';
import { Group } from '../../interfaces/group.interface';
import { GroupService } from '../../services/group/group.service';

import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Utils } from 'src/app/utils/utils';
import { AppConfig } from 'src/app/core/interfaces/appconfig.interface';

@Component({
  selector: 'groups-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  
  loader: boolean;
  groupId: number;
  groupName: string;
  moment: any = moment;
  groupLevel: number = 0;
  titleGroupName: string;
  mainGroupName: string = '';

  groups: Group[] = [];
  constructor(
    private routeService: Router,
    private groupService: GroupService,
    private toastrService: ToastrService,
    private activateRouteService: ActivatedRoute) { 
      
      this.mainGroupName = Utils.getAppConfig().mainGroupName.toLowerCase();

  }

  ngOnInit(): void {
    
    let config: AppConfig = Utils.getAppConfig();

    this.activateRouteService.params.subscribe( params => {

      let subGroupName = config.subGroupName.toLowerCase(),
      mainGroupName = config.mainGroupName.toLowerCase(),
      urlRegExp = new RegExp(`^\/${mainGroupName}\/\\d+$`);
      this.groupId = urlRegExp.test(this.routeService.url) ? 
        parseInt(this.routeService.url.split('/').at(-1)) : 0;

      this.groupName = (this.routeService.url.slice(1) === mainGroupName) ? 
        mainGroupName.charAt(0).toUpperCase() + mainGroupName.slice(1) : 
        subGroupName.charAt(0).toUpperCase() + subGroupName.slice(1);
      this.titleGroupName = this.groupName;    
      
      this.loader = true;
      let groupList = this.groupId === 0 ? 
        this.groupService.getGroups() : 
        this.groupService.getGroupById(this.groupId).pipe(
          switchMap( (group: Group) => {
            this.titleGroupName = `${this.groupName} / ${group.name}`;
            this.groupLevel = group.level + 1;
            return this.groupService.getGroupsByPrincipalId(group.id)
          } )
        );
      
      groupList.subscribe({
        next: (page: Paginator<Group>) => {
          
          this.groups = page.results;
          this.loader = false;
          
        },
        error: (err) => {
          this.toastrService.error("Error al cargar la información del grupo");
          this.routeService.navigate(['/', mainGroupName])
        }
      });

    })

  }

  public filterByField(value: string) {
    
    this.groups = [];
    this.loader = true;
    
    let groupFilterList = this.groupId === 0 ? 
      this.groupService.getGroups(value) :
      this.groupService.getGroupsByPrincipalId(this.groupId, value);

    groupFilterList.subscribe({
      next: (page: Paginator<Group>) => {
        
        this.groups = page.results;
        this.loader = false;
        
      },
      error: console.log
    });

  }
  
}
