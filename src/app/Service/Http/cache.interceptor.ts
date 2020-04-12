import { Injectable, Inject, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpCacheService } from './HttpCacheService';
// import { ToastrService } from 'ngx-toastr';
// import { AlertService } from '../../Providers/alertProvider';


@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private cacheService: HttpCacheService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // pass along non-cacheable requests and invalidate cache  
    if (req.method !== 'GET') {
      console.log(`Invalidating cache: ${req.method} ${req.url}`);
      this.cacheService.invalidateCache();

      return next.handle(req);
    }

    // attempt to retrieve a cached response  
    const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url);

    // return cached response  
    if (cachedResponse) {
      console.log(`Returning a cached response: ${cachedResponse.url}`);
      console.log(cachedResponse);
      return of(cachedResponse);
    }

    // send request to server and add response to cache  
    return next.handle(req)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            console.log(`Adding item to cache: ${req.url}`);
            this.cacheService.put(req.url, event);
          }
        }),
        catchError((err: any) => {
          console.log(err);
          if (err instanceof HttpErrorResponse) {
            switch (err.status) {
              case 401:
              case 403:
                
                //this.router.navigate(['/']);
                window.location.href = '/';
                break;
              case 404:
              
                break;
              case 422:
               
                break;
              case 500:
              
                break;
            }
          }
          return of(err);
        })
      );
  }
}