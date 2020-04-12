import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'login', loadChildren:() =>import('./Components/authenticate/login/login.module').then( l=> l.LoginModule)},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'dashboard', loadChildren:() =>import('./user-records/user-records.module').then( l=> l.UserRecordsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
