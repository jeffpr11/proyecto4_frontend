import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { PrincipalComponent } from './components/principal/principal.component';
import { SharedModule } from '../shared/shared.module';
import { AddeventComponent } from './components/addevent/addevent.component';
import { EventpostComponent } from './components/eventpost/eventpost.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    AddeventComponent,
    EventpostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
