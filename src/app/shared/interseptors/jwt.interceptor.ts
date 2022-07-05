import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersistenceService } from 'src/app/shared/service/persistence.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private persistenceService: PersistenceService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistenceService.get('access-token');

    req = req.clone({
      setHeaders: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    });

    return next.handle(req);
  }
}
