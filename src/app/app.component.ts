import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  template: "<router-outlet></router-outlet>",
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
