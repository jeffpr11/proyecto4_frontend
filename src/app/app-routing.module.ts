
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
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
        path: environment.app_config.main_group_name.toLowerCase(),
        loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule),
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
      },
      {
        path: 'eventos',
        loadChildren: () => import('./events/events.module').then(m => m.EventsModule),
      },
      {
        path: 'recursos',
        loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule),
      },
      {
        path: 'estadisticas',
        loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule),
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
  },
  {
    path: '**',
    component: DashboardContainerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
