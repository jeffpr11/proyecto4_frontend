import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    let srcRoute = route;

    if(!allowedExtensions.exec(route)) {
      srcRoute = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png";
    }

    return srcRoute;
  }

  public downloadFile (route: string) {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', route);
    link.setAttribute('download', `ella.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
