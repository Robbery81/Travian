import { Component, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ResourceFieldTypeEnum } from 'src/app/shared/enums/resource-field-type.enum';
import { TooltipMenuInterface } from 'src/app/shared/interfaces/tooltip-menu.interface';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/store/states/app.state';
import { priceResourcesSelector } from 'src/app/store/selectors/prices.selector';
import { Subscription } from 'rxjs';
import { resourcesFieldsSelector } from 'src/app/store/selectors/village.selector';
import { ResourceFieldInterface } from 'src/app/shared/interfaces/resource-field.interface';
import { UpgradeFieldPriceInterface } from 'src/app/shared/interfaces/upgrade-field-price.interface';
import { PriceInterface } from 'src/app/shared/interfaces/price.interface';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  tooltipMenu: TooltipMenuInterface;

  prices: UpgradeFieldPriceInterface;
  pricesSubscription: Subscription;

  fields?: ResourceFieldInterface[] = [];
  fieldsSubscription: Subscription;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.pricesSubscription = this.store.pipe(select(priceResourcesSelector)).subscribe((prices) => {
      if (prices) {
        console.log(prices);
        this.prices = prices;
      }
    });

    this.fieldsSubscription = this.store.pipe(select(resourcesFieldsSelector)).subscribe((fields) => {
      this.fields = fields;
    });
  }

  ngOnDestroy(): void {
    this.fieldsSubscription.unsubscribe();
    this.pricesSubscription.unsubscribe();
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

  private setPrice(field: ResourceFieldTypeEnum, level: number): PriceInterface | undefined {
    return this.prices[field]?.find((item) => item.level === level)?.price;
  }
}
