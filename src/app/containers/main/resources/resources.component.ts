import { Component, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

import { MatDialog } from '@angular/material/dialog';

import { Observable, Subscription } from 'rxjs';

import { select, Store } from '@ngrx/store';

import { priceResourcesSelector } from 'src/app/store/selectors/prices.selector';
import { currentVillageSelector, resourcesFieldsSelector } from 'src/app/store/selectors/village.selector';
import { buildAction, buildFinishAction } from 'src/app/store/actions/build.action';
import { dataBuildSelector } from 'src/app/store/selectors/build.selector';
import { villageSuccessAction } from 'src/app/store/actions/village.action';

import { changeObjectLink } from 'src/app/shared/functions/change-object-link';

import { DialogComponent, DialogConfig } from 'src/app/shared/components/dialog/dialog.component';

import { BuildingDto } from 'src/app/shared/interfaces/building.dto';

import { ResourceFieldTypeEnum } from 'src/app/shared/enums/resource-field-type.enum';

import { PriceInterface } from 'src/app/shared/interfaces/price.interface';
import { VillageInterface } from 'src/app/shared/interfaces/village.interface';
import { AppStateInterface } from 'src/app/store/states/app.state';
import { TooltipMenuInterface } from 'src/app/shared/interfaces/tooltip-menu.interface';
import { UpdateFieldInterface } from 'src/app/shared/interfaces/update-field.interface';
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
  public currentVillage: VillageInterface;

  public build$: Observable<BuildingDto>;

  private dialogConfigData: DialogConfig;

  private upgradeData = {
    timesForBuild: 0,
    production: {
      next: 0,
      current: 0
    },
    population: 0,
    culture: 0
  };

  private pricesSubscription: Subscription;
  private fieldsSubscription: Subscription;
  private currentVillageSubscription: Subscription;

  constructor(private store: Store<AppStateInterface>, public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.initializeSubscriptions();
  }

  public ngOnDestroy(): void {
    this.fieldsSubscription.unsubscribe();
    this.pricesSubscription.unsubscribe();
  }

  public initializeSubscriptions(): void {
    this.build$ = this.store.pipe(select(dataBuildSelector));

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

    this.currentVillageSubscription = this.store.pipe(select(currentVillageSelector)).subscribe((item) => {
      if (item) {
        this.currentVillage = item;
      }
    });
  }

  public mouseEnter(trigger: MatMenuTrigger): void {
    trigger.openMenu();
  }

  public mouseLeave(trigger: MatMenuTrigger): void {
    trigger.closeMenu();
  }

  public addTooltipData(field: ResourceFieldInterface): void {
    this.tooltipMenu = {
      name: field.type,
      level: field.level,
      price: this.setPrice(field.type, field.level)
    };
  }

  public openDialog(field: ResourceFieldInterface) {
    this.dialogConfigData = {
      index: field.index,
      type: field.type,
      level: this.tooltipMenu.level,
      price: this.tooltipMenu.price,
      addCulture: this.upgradeData.culture,
      timesForBuild: this.upgradeData.timesForBuild,
      addPopulation: this.upgradeData.population,
      productionNext: this.upgradeData.production.next,
      productionCurrent: this.upgradeData.production.current
    };

    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.dialogConfigData,
      panelClass: 'my-custom-dialog-class'
    });

    dialogRef.afterClosed().subscribe((res: boolean) => this.closeDialog(res));
  }

  public closeDialog(isBuildStart: boolean) {
    if (isBuildStart) {
      const updateField: UpdateFieldInterface = {
        villageName: this.currentVillage.name,
        fieldIndex: this.dialogConfigData.index,
        fieldType: this.dialogConfigData.type,
        fieldLevel: this.dialogConfigData.level + 1
      };

      this.currentVillage = changeObjectLink(this.currentVillage);

      const warehouse = this.currentVillage.resources.warehouse.values;
      const granary = this.currentVillage.resources.granary.values;

      if (this.dialogConfigData.price) {
        warehouse.lumber = warehouse.lumber - this.dialogConfigData.price?.lumber;
        warehouse.clay = warehouse.clay - this.dialogConfigData.price?.clay;
        warehouse.iron = warehouse.iron - this.dialogConfigData.price?.iron;
        granary.crop = granary.crop - this.dialogConfigData.price?.crop;
      }

      this.store.dispatch(villageSuccessAction({ currentVillage: this.currentVillage }));

      this.store.dispatch(buildAction({ request: updateField }));
    }
  }

  public onBuildingResolve() {
    this.currentVillage = changeObjectLink(this.currentVillage);
    this.currentVillage.resourceFields[this.dialogConfigData.index].level++;
    this.store.dispatch(villageSuccessAction({ currentVillage: this.currentVillage }));
    this.store.dispatch(buildFinishAction());
  }

  private setUpgradeInfo(currentElement?: UpgradePriceInterface, nextElement?: UpgradePriceInterface) {
    this.upgradeData = {
      timesForBuild: nextElement ? nextElement.timesForBuild : 0,
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
