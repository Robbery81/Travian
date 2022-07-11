import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogButtonComponent } from './dialog-button/dialog-button.component';
import { MainButtonComponent } from './main-button/main-button.component';

@NgModule({
  declarations: [DialogButtonComponent, MainButtonComponent],
  exports: [DialogButtonComponent, MainButtonComponent],
  imports: [CommonModule]
})
export class ButtonsModule {}
