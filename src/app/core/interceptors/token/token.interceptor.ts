
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = this.addHeaders(request);
    
    return next.handle(request)

  }

  private addHeaders(request: HttpRequest<any>) {
    
    let token: string | null = '';
    token = localStorage.getItem('token');
    
    if (token && token !== 'undefined') {

      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

    } else {
      return request; }

  }

}
