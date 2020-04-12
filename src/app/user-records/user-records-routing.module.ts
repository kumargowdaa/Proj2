import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRecordsComponent } from './user-records.component';


const routes: Routes = [
{path : '', component: UserRecordsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRecordsRoutingModule { }
