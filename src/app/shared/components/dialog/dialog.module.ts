import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonsModule } from 'src/app/shared/components/buttons/buttons.module';

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, MatDialogModule, ButtonsModule]
})
export class DialogModule {}
