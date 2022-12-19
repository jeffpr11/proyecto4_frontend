
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinisteriosRoutingModule } from './ministerios-routing.module';
import { PrincipalComponent } from './components/principal/principal.component';
import { AddMinistryComponent } from './components/addministry/addministry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PrincipalComponent,
    AddMinistryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MinisteriosRoutingModule
  ]
})
export class MinisteriosModule { }
