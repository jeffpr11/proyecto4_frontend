import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PrincipalComponent } from './components/principal/principal.component';
import { UserlistComponent } from './components/userlist/userlist.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    UserlistComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
