
import { Directive, ElementRef, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Directive({
  selector: '[hasRole]'
})
export class HasRoleDirective {

  @Input() role: string;

  constructor(
    private element: ElementRef,
    private authService: AuthService
  ) { }

  ngOnInit() {

    let element = this.element.nativeElement;

    if( !this.authService.hasRole(this.role) ) {
      element.remove(); }

  }

}
