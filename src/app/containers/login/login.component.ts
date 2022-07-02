import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { loginAction } from 'src/app/store/actions/login.action';
import { LoginRequestInterface } from 'src/app/shared/interfaces/login-request.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public form: FormGroup = new FormGroup({
    login: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(1)])
  });

  public submitted = false;

  constructor(private authService: AuthService, private router: Router, private store: Store) {}

  public submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

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
          this.submitted = false;
        }
      });

    this.store.dispatch(loginAction(user));
  }
}
