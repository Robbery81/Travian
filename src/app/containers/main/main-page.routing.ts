import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from "src/app/containers/main/main.component";
import { VillageComponent } from "src/app/containers/main/village/village.component";
import { ResourcesComponent } from "src/app/containers/main/resources/resources.component";
import { AuthGuard } from "src/app/shared/guards/auth-guard-service.guard";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'resources',
        component: ResourcesComponent
      },
      {
        path: 'village',
        component: VillageComponent
      }
    ],
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainRoutingModule {}
