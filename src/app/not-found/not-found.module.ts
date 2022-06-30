import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NotFoundRouting } from './not-found.routing';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [ NotFoundComponent ],
  exports: [ NotFoundComponent ],
  imports: [ NotFoundRouting, CommonModule ]
})
export class NotFoundModule {}
