import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { loginAction } from 'src/app/store/actions/login.action';
import { LoginRequestInterface } from 'src/app/shared/interfaces/login-request.interface';
import { Observable } from 'rxjs';
import { isSubmittingSelector } from 'src/app/store/selectors/login.selector';
import { AppStateInterface } from 'src/app/store/states/app.state';

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

  public isSubmitting$: Observable<boolean> | undefined;

  constructor(private authService: AuthService, private router: Router, private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  public submit() {
    if (this.form.invalid) {
      return;
    }

    const user: LoginRequestInterface = {
      email: this.form.value.login,
      password: this.form.value.password
    };

    this.authService
      .login(user)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: () => {
          //this.submitted = false;
        }
      });

    this.store.dispatch(loginAction(user));
  }
}
