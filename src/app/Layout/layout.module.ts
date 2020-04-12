import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderSubNavComponent } from './header-sub-nav/header-sub-nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeadersComponent } from './headers/headers.component';



@NgModule({
  declarations: [
    HeaderNavComponent,
    HeaderSubNavComponent,
    FooterComponent,
    HeadersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderNavComponent,
    HeaderSubNavComponent,
    FooterComponent,
    HeadersComponent
  ]
})
export class LayoutModule { }
