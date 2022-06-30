import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logInForm: FormGroup = new FormGroup({
    userLogin: new FormControl('Login'),
    userPass: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
    console.log(this.logInForm)
  }

}
