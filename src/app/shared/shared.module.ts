import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login/login.component';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container/dashboard-container.component';
import { RouterModule } from '@angular/router';
import { HasRoleDirective } from './directives/has-role/has-role.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { AddbarComponent } from './components/addbar/addbar.component';
import { EmptypageComponent } from './components/emptypage/emptypage.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    DashboardContainerComponent,
    HasRoleDirective,
    LoaderComponent,
    AddbarComponent,
    EmptypageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    LoaderComponent,
    AddbarComponent,
    EmptypageComponent
  ]
})
export class SharedModule { }
