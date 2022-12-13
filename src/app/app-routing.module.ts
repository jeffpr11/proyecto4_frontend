import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticantionGuard } from './core/guards/authentication/authenticantion.guard';
import { DashboardContainerComponent } from './shared/components/dashboard-container/dashboard-container/dashboard-container.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LoginComponent } from './shared/components/login/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent,
    children: [
      {
        path: 'ministerio',
        loadChildren: () => import('./ministerios/ministerios.module').then(m => m.MinisteriosModule),
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ],
    canActivate: [AuthenticantionGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
