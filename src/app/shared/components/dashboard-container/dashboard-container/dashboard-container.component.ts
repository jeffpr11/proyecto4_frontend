
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {


  name: any = "";
  mainGroupName: string = environment.app_config.main_group_name;

  constructor(
    private router: Router,
    private authService: AuthService) {

  }

  ngOnInit(): void {
    
    this.name = localStorage.getItem("name");
    
  }

  public logout(event: any) {

    this.authService.logout();
    this.router.navigate(['login']);

  }

}
