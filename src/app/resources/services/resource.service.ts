import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paginator } from 'src/app/core/interfaces/paginator.interface';
import { Resource } from '../interfaces/resource.interface';
import { Utils } from 'src/app/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  MAIN_RESOURCE_URL: string = environment.api_main_url.concat(environment.resources.main_resource);

  constructor(private httpClient: HttpClient) { }

  public getResources(name?: string): Observable<Paginator<Resource>> {
    let params : any = {};

    if(name) {
      params['search'] = name;
    }

    return this.httpClient.get<Paginator<Resource>>(`${this.MAIN_RESOURCE_URL}/`, { params });
  }

  public addResource(mainResource: Resource): Observable<Resource> {
    Utils.setGeneralFields(mainResource);

    const formData = new FormData();
    formData.append('route', mainResource.route);
    formData.append('name', mainResource.name);
    formData.append('groups', mainResource.groups[0].toString());

    return this.httpClient.post<Resource>(`${this.MAIN_RESOURCE_URL}/`, formData);
  }
}
