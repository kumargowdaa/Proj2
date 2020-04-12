import { Injectable } from '@angular/core';
import { GlobalService } from './SiteAuth/global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// import { LoginForm } from '../models/loginForm';
import { User } from '../Models/user';

// User Login Related API's

const LOGIN_API = 'Users1/users';
const USERS_API = '/admin/getusers';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, private siteAuth: GlobalService) {
  }

  private getHeaders() {

    return new HttpHeaders({
      'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Origin': '*',
    //   Authorization: 'Bearer ' + localStorage.getItem('access-token')
    });
  }

//   userLogin1(UserModel: User): Observable<any> {
//     let headers = this.getHeaders();
//     let apiUrl = 'https://api.github.com/users?since=135';
//     let body = JSON.stringify({ UserModel });
//     return this.http.post<any>(apiUrl, body, { headers: headers })
//       .pipe(
//         map(
//           response => {
//             return response;
//           }
//         ),
//         catchError(this.handleError)
//       )
//   }


  userLogin(user1): Observable<User[]> {
    let headers = this.getHeaders();
    let apiUrl = this.siteAuth.apiHostUrl + LOGIN_API;
    // let apiUrl = 'http://localhost/services/api/Users1/users';
    return this.http.get<any>(apiUrl, { headers: headers })
      .pipe(
          map(
            response => {
              return <User[]>response.data;
            }
          ),
        catchError(this.handleError)
      )
  }

  private handleError(response: any) {

    let errorMessage: any = {};
    // Connection error
    console.log(response);

    if (response.status === 0) {
      errorMessage = {
        success: false,
        status: 0,
        data: 'Sorry, there was a connection error occurred. Please try again.'
      };
    } else {
      errorMessage = response.error;
    }

    return throwError(errorMessage);
  }
}
