import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from 'src/app/containers/main/main-page.routing';

import { MainComponent } from 'src/app/containers/main/main.component';
import { VillageComponent } from 'src/app/containers/main/village/village.component';
import { ResourcesComponent } from 'src/app/containers/main/resources/resources.component';
import { HeaderComponent } from 'src/app/containers/main/header/header.component';

@NgModule({
  declarations: [MainComponent, VillageComponent, ResourcesComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, MainRoutingModule]
})
export class MainModule {}
