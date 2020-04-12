import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CacheInterceptor } from './Service/Http/cache.interceptor';
import { RouteDataProvider } from './SharedModules/RouteDataProvider.provider';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true},
    RouteDataProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
