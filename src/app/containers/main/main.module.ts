import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DialogModule } from 'src/app/shared/components/dialog/dialog.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainRoutingModule } from 'src/app/containers/main/main-page.routing';

import { MainComponent } from 'src/app/containers/main/main.component';
import { HeaderComponent } from 'src/app/containers/main/header/header.component';
import { VillageComponent } from 'src/app/containers/main/village/village.component';
import { StockBarComponent } from './stock-bar/stock-bar.component';
import { CurrencyComponent } from './currency/currency.component';
import { ResourcesComponent } from 'src/app/containers/main/resources/resources.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    VillageComponent,
    StockBarComponent,
    CurrencyComponent,
    ResourcesComponent,
    NavigationComponent
  ],
  imports: [CommonModule, RouterModule, MainRoutingModule, MatTooltipModule, MatMenuModule, DialogModule, SharedModule]
})
export class MainModule {}
