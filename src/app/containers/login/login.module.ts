import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginComponent } from 'src/app/containers/login/login.component';
import { LoginRoutingModule } from 'src/app/containers/login/login.routing';
import { BackendErrorMessagesModule } from 'src/app/shared/components/backend-error-messages/backend-error-messages.module';

@NgModule({
  imports: [FormsModule, CommonModule, LoginRoutingModule, ReactiveFormsModule, BackendErrorMessagesModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
