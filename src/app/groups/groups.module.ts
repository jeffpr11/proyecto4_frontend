
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { PrincipalComponent } from './components/principal/principal.component';
import { AddGroupComponent } from './components/addgroup/addgroup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    AddGroupComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    GroupsRoutingModule,
  ]
})
export class GroupsModule { }
