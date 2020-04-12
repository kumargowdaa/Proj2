import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRecordsRoutingModule } from './user-records-routing.module';
import { LayoutModule } from '../Layout/layout.module';
import { UserRecordsComponent } from './user-records.component';


@NgModule({
  declarations: [
    UserRecordsComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    UserRecordsRoutingModule,
  ]
})
export class UserRecordsModule { }
