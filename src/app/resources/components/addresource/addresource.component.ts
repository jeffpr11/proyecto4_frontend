import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResourceService } from '../../services/resource.service';
import { Group } from '../../../groups/interfaces/group.interface';
import { GroupService } from '../../../groups/services/group/group.service';
import { Resource } from '../../interfaces/resource.interface';
import { Utils } from 'src/app/utils/utils';
import { Paginator } from 'src/app/core/interfaces/paginator.interface';

@Component({
  selector: 'app-addresource',
  templateUrl: './addresource.component.html',
  styleUrls: ['./addresource.component.scss']
})
export class AddresourceComponent implements OnInit {

  principalResourceForm: FormGroup;
  groupsList: Group[];
  subgroupsList: Group[];

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private resourceService: ResourceService,
    private groupService: GroupService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.buildForm();

    this.groupService.getGroups().subscribe({
      next: (page: Paginator<Group>) => {
        this.groupsList = page.results;
      },
      error: (err) => {
        this.toastrService.error("Error al cargar la información de los grupos");
      }
    });
  }

  public addResource () {
    if( this.principalResourceForm.valid ) {
      let newResource: Resource = this.principalResourceForm.value;

      newResource.groups = (this.principalResourceForm.get('subgroups').value !== "")
        ? this.principalResourceForm.get('subgroups').value : newResource.groups;

      this.resourceService.addResource(newResource).subscribe({
        next: (group) => {},
        error: (err) => Utils.getFormErrors(err.error).forEach( (e: string) => this.toastrService.error(e)),
        complete: () => {
          this.toastrService.success("El recurso se agrego exitosamente");
          this.router.navigate(['/', 'recursos'])
        }
      })
    }
  }

  public onRecursoFile (event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.principalResourceForm.get('route').setValue(file);
    }
  }

  public onChangeGroups () {
    let groupId = this.principalResourceForm.get('groups').value;
    this.groupService.getGroupsByPrincipalId(groupId).subscribe({
      next: (response: any) => {
        this.subgroupsList = response.results
      }
    })
  }

  public buildForm() {
    this.principalResourceForm = this.formBuilder.group({
      route: ['', [
        Validators.required
      ]],
      name: ['', [
        Validators.required, Validators.minLength(4), Validators.maxLength(50)
      ]],
      groups: ['Seleccione un grupo', [
        Validators.required,
        Validators.min(1),
        Validators.pattern('^[1-9]+$')]
      ],
      subgroups: [''],
    });
  }
}
