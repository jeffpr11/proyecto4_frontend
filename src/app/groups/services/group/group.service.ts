
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paginator } from 'src/app/core/interfaces/paginator.interface';
import { environment } from 'src/environments/environment';
import { Group } from '../../interfaces/group.interface';
import { Utils } from 'src/app/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  MAIN_GROUP_URL: string = environment.api_main_url.concat(environment.resources.main_group);

  constructor(private httpClient: HttpClient) { }

  public  getGroups(nombre?: string, level: number = 0): Observable<Paginator<Group>> {

    let params: any = {
      level
    };

    if(nombre) {
      params['search'] = nombre; }

    return this.httpClient.get<Paginator<Group>>(`${this.MAIN_GROUP_URL}/`, { params });

  }
  
  public  getGroupsByOwner(owner: string, principal_id: number = 1, level: number = 1): Observable<Paginator<Group>> {

    return this.httpClient.get<Paginator<Group>>(`${this.MAIN_GROUP_URL}/`, { 
      params: { 
        level, 
        principal_id,
        group_leader__user__username: owner, 
      }
    });

  }

  public getGroupsByPrincipalId(principalGroupId: number = 0, nombre: string = ''): Observable<Paginator<Group>> {

    let params: any = {
      search: nombre,
      principal_group: principalGroupId
    };

    return this.httpClient.get<Paginator<Group>>(`${this.MAIN_GROUP_URL}/`, { params });

  }



  public getGroupById(id: number): Observable<Group> {

    return this.httpClient.get<Group>(`${this.MAIN_GROUP_URL}/${id}/`);

  }

  public addGroup(group: Group): Observable<Group> {

    Utils.setGeneralFields(group);

    let formData = new FormData();
    
    formData.append("name", group.name);
    formData.append("level", group.level.toString());
    formData.append("description", group.description);
    formData.append("group_image", group.group_image_file);
    formData.append("group_leader", group.group_leader.toString());
    if( group.principal_group != null) { 
      formData.append("principal_group", group.principal_group.toString()); }

    return this.httpClient.post<Group>(`${this.MAIN_GROUP_URL}/`, formData);

  }

  public updateGroup(group: Group): Observable<Group> {

    Utils.updateGeneralFields(group);

    let formData = new FormData();
    
    formData.append("name", group.name);
    formData.append("description", group.description);
    formData.append("level", group.level.toString());
    formData.append("group_leader", group.group_leader.toString());
    
    if( group.group_image_file != null ) {
      formData.append("group_image", group.group_image_file); }
    
    if( group.principal_group != null) { 
      formData.append("principal_group", group.principal_group.toString()); }

    return this.httpClient.put<Group>(`${this.MAIN_GROUP_URL}/${group.id}/`, formData);

  }

}
