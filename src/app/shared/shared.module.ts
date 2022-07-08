import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceNamePipe } from 'src/app/shared/pipes/resource-name.pipe';

@NgModule({
  declarations: [ResourceNamePipe],
  exports: [ResourceNamePipe],
  imports: [CommonModule]
})
export class SharedModule {}
