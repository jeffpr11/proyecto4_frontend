
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Paginator } from 'src/app/core/interfaces/paginator.interface';
import { Resource } from '../../interfaces/resource.interface';
import { ResourceService } from '../../services/resource.service';
@Component({
  selector: 'resource-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  loader: boolean;
  resources: Resource[] = [];

  constructor(
    private routeService: Router,
    private toastrService: ToastrService,
    private resourceService: ResourceService
  ) { }

  ngOnInit(): void {
    this.resourceService.getResources().subscribe({
      next: (page: Paginator<Resource>) => {

        this.resources = page.results;
        this.loader = false;

      },
      error: (err) => {
        this.toastrService.error("Error al cargar la información del recurso");
        this.routeService.navigate(['/', 'recursos']);
      }
    });
  }

  public filterByField(value: string) {
    this.resources = [];
    this.loader = true;

    this.resourceService.getResources(value).subscribe({
      next: (page: Paginator<Resource>) => {

        this.resources = page.results;
        this.loader = false;

      },
      error: console.log
    });
  }

  public previewFileByExtension (route: string) {
    
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif|.webp)$/i;

    let srcRoute = route;

    if(!allowedExtensions.exec(route)) {
      srcRoute = "/assets/dist/img/pdf-icon.svg";
    }

    return srcRoute;

  }

  public downloadFile (resource: Resource) {

    this.resourceService.getResourceByUrl(resource.route).subscribe({
      next: (response) => {

        let blob = response.body as Blob,
          resourceTmpTag = document.createElement("a");
          
        resourceTmpTag.download = resource.name.replace(" ", "_").toLowerCase();
        resourceTmpTag.href = window.URL.createObjectURL(blob);
        resourceTmpTag.click();

      }

    });
  
  }

}
