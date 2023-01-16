import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { PrincipalComponent } from './components/principal/principal.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    StatsRoutingModule,
    NgChartsModule
  ]
})
export class StatsModule { }
