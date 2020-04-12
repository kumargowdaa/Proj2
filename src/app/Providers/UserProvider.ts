import { Injectable } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from '../models/user';
// import { LoginForm } from '../models/LoginForm';
import {UserService} from '../Service/UserService'

@Injectable({
  providedIn: 'root'
})
export class UserProvider {
  public errorMessage: string;
  public loggedInUser: User = new User;
  public userRole: number;
  public loading : boolean;
  constructor(private userService: UserService, private router: Router) {

  }
  userLogin(user1: User): void {
    this.userService.userLogin(user1).subscribe(
      (response) => {

        this.router.navigate(['/dashboard']);
        // this.toastr.success("Logged in Successfully", "Success");
        // if (response) {
        //   localStorage.setItem('access-token', response.data.access_token);
        //   localStorage.setItem('userRole', response.data.user_role);
        //   localStorage.setItem('userId', response.data.id);
        //   localStorage.setItem('userName', response.data.user_name);
        //   this.loading = true;
        //   let user = response.data;
        // }
       
      },
      error => {
        if (error.status == 422) {
        //   this.toastr.error(" Incorrect username or password ", "Error");
          this.errorMessage = ' Incorrect username or password ';
          this.loading = false;
        }
      }
    )
  };
}
