import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { AddresourceComponent } from './components/addresource/addresource.component';

const routes: Routes = [
  {
    path: "",
    component: PrincipalComponent
  },
  {
    path: 'add',
    component: AddresourceComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
