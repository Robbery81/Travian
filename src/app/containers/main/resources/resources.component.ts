import { Component, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';

import { select, Store } from '@ngrx/store';

import { AppStateInterface } from 'src/app/store/states/app.state';
import { priceResourcesSelector } from 'src/app/store/selectors/prices.selector';
import { resourcesFieldsSelector } from 'src/app/store/selectors/village.selector';

import { DialogComponent, DialogConfig } from 'src/app/shared/components/dialog/dialog.component';

import { ResourceFieldTypeEnum } from 'src/app/shared/enums/resource-field-type.enum';

import { PriceInterface } from 'src/app/shared/interfaces/price.interface';
import { TooltipMenuInterface } from 'src/app/shared/interfaces/tooltip-menu.interface';
import { ResourceFieldInterface } from 'src/app/shared/interfaces/resource-field.interface';
import {
  UpgradeFieldPriceInterface,
  UpgradePriceInterface
} from 'src/app/shared/interfaces/upgrade-field-price.interface';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  public fields: ResourceFieldInterface[];
  public prices: UpgradeFieldPriceInterface;
  public tooltipMenu: TooltipMenuInterface;
  public isBuilding: boolean;

  private upgradeData = {
    production: {
      next: 0,
      current: 0
    },
    population: 0,
    culture: 0
  };

  private pricesSubscription: Subscription;
  private fieldsSubscription: Subscription;

  constructor(private store: Store<AppStateInterface>, public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.initializeSubscriptions();
  }

  public ngOnDestroy(): void {
    this.fieldsSubscription.unsubscribe();
    this.pricesSubscription.unsubscribe();
  }

  public initializeSubscriptions(): void {
    this.pricesSubscription = this.store.pipe(select(priceResourcesSelector)).subscribe((prices) => {
      if (prices) {
        this.prices = prices;
      }
    });

    this.fieldsSubscription = this.store.pipe(select(resourcesFieldsSelector)).subscribe((fields) => {
      if (fields) {
        this.fields = fields;
      }
    });
  }

  public mouseEnter(trigger: MatMenuTrigger): void {
    trigger.openMenu();
  }

  public mouseLeave(trigger: MatMenuTrigger): void {
    trigger.closeMenu();
  }

  public addTooltipData(field: any): void {
    this.tooltipMenu = {
      name: field.type,
      level: field.level,
      price: this.setPrice(field.type, field.level)
    };
  }

  openDialog(field: ResourceFieldInterface) {
    const data: DialogConfig = {
      type: field.type,
      level: this.tooltipMenu.level,
      price: this.tooltipMenu.price,
      productionCurrent: this.upgradeData.production.current,
      productionNext: this.upgradeData.production.next,
      addPopulation: this.upgradeData.population,
      addCulture: this.upgradeData.culture
    };

    const dialogRef = this.dialog.open(DialogComponent, {
      data,
      panelClass: 'my-custom-dialog-class'
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.isBuilding = result;
    });
  }

  private setUpgradeInfo(currentElement?: UpgradePriceInterface, nextElement?: UpgradePriceInterface) {
    this.upgradeData = {
      production: {
        current: currentElement ? currentElement.production : 0,
        next: nextElement ? nextElement.production : 0
      },
      population: nextElement ? nextElement.population : 0,
      culture: nextElement ? nextElement.culture : 0
    };
  }

  private setPrice(field: ResourceFieldTypeEnum, level: number): PriceInterface | undefined {
    const currentElement = this.prices[field]?.find((item) => item.level === level);
    const nextElement = this.prices[field]?.find((item) => item.level === level + 1);

    this.setUpgradeInfo(currentElement, nextElement);

    return nextElement?.price;
  }
}
