import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapacityPipe } from 'src/app/shared/pipes/capacity.pipe';
import { BuildTimePipe } from 'src/app/shared/pipes/build-time.pipe';
import { ResourceNamePipe } from 'src/app/shared/pipes/resource-name.pipe';

@NgModule({
  declarations: [ResourceNamePipe, BuildTimePipe, CapacityPipe],
  exports: [ResourceNamePipe, BuildTimePipe, CapacityPipe],
  imports: [CommonModule]
})
export class SharedModule {}
