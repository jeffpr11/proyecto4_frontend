
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGroupComponent } from './components/addgroup/addgroup.component';
import { EditComponent } from './components/edit/edit.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent
  },
  {
    path: 'add',
    component: AddGroupComponent
  },
  {
    path: ':id',
    component: PrincipalComponent
  },
  {
    path: ':id/add',
    component: AddGroupComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'group/edit/:id',
    component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
