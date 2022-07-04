import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/shared/interfaces/backend-errors.interface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.css']
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface = {};

  errorMessages: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.errorMessages = Object.values(this.backendErrorsProps).map((name) => name);
  }
}
