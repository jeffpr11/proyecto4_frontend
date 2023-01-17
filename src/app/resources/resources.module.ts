import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { PrincipalComponent } from './components/principal/principal.component';
import { SharedModule } from '../shared/shared.module';
import { AddresourceComponent } from './components/addresource/addresource.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PrincipalComponent,
    AddresourceComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
