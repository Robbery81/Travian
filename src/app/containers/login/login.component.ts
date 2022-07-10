import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { isSubmittingSelector, validationErrorsSelector } from 'src/app/store/selectors/login.selector';
import { loginAction } from 'src/app/store/actions/login.action';

import { AuthService } from 'src/app/shared/service/auth.service';

import { AppStateInterface } from 'src/app/store/states/app.state';
import { LoginRequestInterface } from 'src/app/shared/interfaces/login-request.interface';
import { BackendErrorsInterface } from 'src/app/shared/interfaces/backend-errors.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    login: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(1)])
  });

  public isSubmitting$?: Observable<boolean>;
  public backendErrors$?: Observable<BackendErrorsInterface | null>;

  constructor(private authService: AuthService, private router: Router, private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  public submit() {
    if (this.form.invalid) {
      return;
    }

    const user: LoginRequestInterface = {
      email: this.form.value.login,
      password: this.form.value.password
    };

    this.store.dispatch(loginAction({ request: user }));
  }
}
