import { Component, OnInit, Input } from '@angular/core';
import { RouteDataProvider } from 'src/app/SharedModules/RouteDataProvider.provider';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
// import { User } from 'src/app/Models/user';
import { UserProvider } from 'src/app/Providers/UserProvider';
import { User } from 'src/app/models/user';
// import {FormsModule,ReactiveFormsModule} from '@angular/forms';
// import { MustMatch } from 'src/app/_helpers/must-match.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private routerProvider: RouteDataProvider, private userProvider: UserProvider) { }
  public loading = false;
  loginForm: FormGroup;
  submitted = false;
  @Input() model: User = new User;
  private errorMessage: String;

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          // firstName: ['', Validators.required],
          // lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          Password: ['', [Validators.required, Validators.minLength(6)]],
          // confirmPassword: ['', Validators.required]
      }, {
          // validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.userProvider.userLogin(this.loginForm.value);

      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }

}
