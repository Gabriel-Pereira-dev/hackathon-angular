import { environment } from './../../environments/environment';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
class APIInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({url: `${ environment.API }/${ req.url }`})
    return next.handle(apiReq)
  }
}

export const APIInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: APIInterceptor,
  multi: true,
}
