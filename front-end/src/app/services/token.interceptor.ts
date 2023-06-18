import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

const headerDict = { //da vedere se servono
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
};

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log(request)
    if(this.authService.requestIsRegister){
      return next.handle(request);
    }

    if(this.authService.isLoggedIn){
      let newRequest = request.clone({
        url: request.url + "?auth=" + this.authService.currentUser!.token
      })

      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
