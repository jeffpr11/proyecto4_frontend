
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinisteriosRoutingModule } from './ministerios-routing.module';
import { PrincipalComponent } from './components/principal/principal.component';


@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    MinisteriosRoutingModule
  ]
})
export class MinisteriosModule { }
