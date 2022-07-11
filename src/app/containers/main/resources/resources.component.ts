import { Component, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';

import { select, Store } from '@ngrx/store';

import { AppStateInterface } from 'src/app/store/states/app.state';
import { priceResourcesSelector } from 'src/app/store/selectors/prices.selector';
import { resourcesFieldsSelector } from 'src/app/store/selectors/village.selector';

import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

import { ResourceFieldTypeEnum } from 'src/app/shared/enums/resource-field-type.enum';

import { PriceInterface } from 'src/app/shared/interfaces/price.interface';
import { TooltipMenuInterface } from 'src/app/shared/interfaces/tooltip-menu.interface';
import { ResourceFieldInterface } from 'src/app/shared/interfaces/resource-field.interface';
import { UpgradeFieldPriceInterface } from 'src/app/shared/interfaces/upgrade-field-price.interface';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  public fields: ResourceFieldInterface[];
  public prices: UpgradeFieldPriceInterface;
  public tooltipMenu: TooltipMenuInterface;

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
      price: this.setPrice(field.type, field.level + 1)
    };
  }

  openDialog(field: ResourceFieldInterface) {
    console.log(field);
    console.log(this.tooltipMenu);
    this.dialog.open(DialogComponent, {
      data: {
        animal: 'panda'
      },
      panelClass: 'my-custom-dialog-class'
    });
  }

  private setPrice(field: ResourceFieldTypeEnum, level: number): PriceInterface | undefined {
    return this.prices[field]?.find((item) => item.level === level)?.price;
  }
}
