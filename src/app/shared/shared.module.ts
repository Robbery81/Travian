import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildTimePipe } from 'src/app/shared/pipes/build-time.pipe';
import { ResourceNamePipe } from 'src/app/shared/pipes/resource-name.pipe';

@NgModule({
  declarations: [ResourceNamePipe, BuildTimePipe],
  exports: [ResourceNamePipe, BuildTimePipe],
  imports: [CommonModule]
})
export class SharedModule {}
