import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { ButtonsModule } from 'src/app/shared/components/buttons/buttons.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { DialogComponent } from './dialog.component';

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, MatDialogModule, ButtonsModule, SharedModule]
})
export class DialogModule {}
