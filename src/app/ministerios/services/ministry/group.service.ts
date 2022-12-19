
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paginator } from 'src/app/core/interfaces/paginator.interface';
import { environment } from 'src/environments/environment';
import { Ministry } from '../../interfaces/ministry.interface';
import { Utils } from 'src/app/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  MAIN_GROUP_URL: string = environment.api_main_url.concat(environment.resources.main_group);

  constructor(private httpClient: HttpClient) { }

  public getMainGroups(): Observable<Paginator<Ministry>> {

    return this.httpClient.get<Paginator<Ministry>>(this.MAIN_GROUP_URL);

  }
  
  public addMainGroup(mainGroup: Ministry): Observable<Ministry> {

    Utils.setGeneralFields(mainGroup);
    mainGroup.level = 0;
    debugger;
    return this.httpClient.post<Ministry>(this.MAIN_GROUP_URL, mainGroup);

  }

}
