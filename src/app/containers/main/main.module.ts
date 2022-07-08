import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from 'src/app/containers/main/main-page.routing';

import { MainComponent } from 'src/app/containers/main/main.component';
import { VillageComponent } from 'src/app/containers/main/village/village.component';
import { ResourcesComponent } from 'src/app/containers/main/resources/resources.component';
import { HeaderComponent } from 'src/app/containers/main/header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StockBarComponent } from './stock-bar/stock-bar.component';
import { CurrencyComponent } from './currency/currency.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    VillageComponent,
    ResourcesComponent,
    HeaderComponent,
    NavigationComponent,
    StockBarComponent,
    CurrencyComponent
  ],
  imports: [CommonModule, RouterModule, MainRoutingModule, MatTooltipModule, MatMenuModule, SharedModule]
})
export class MainModule {}
