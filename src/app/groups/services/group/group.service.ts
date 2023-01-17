
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

  public addGroup(mainGroup: Group): Observable<Group> {

    Utils.setGeneralFields(mainGroup);

    return this.httpClient.post<Group>(`${this.MAIN_GROUP_URL}/`, mainGroup);

  }

  public updateGroup(group: Group): Observable<Group> {

    Utils.updateGeneralFields(group);

    return this.httpClient.put<Group>(`${this.MAIN_GROUP_URL}/${group.id}/`, group);

  }

}
