import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login/login.component';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container/dashboard-container.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HasRoleDirective } from './directives/has-role/has-role.directive';


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    DashboardContainerComponent,
    HasRoleDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
