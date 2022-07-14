import { AfterViewInit, Component, Input } from '@angular/core';

import { ResourcesInterface } from 'src/app/shared/interfaces/resources.interface';
import { PriceInterface } from 'src/app/shared/interfaces/price.interface';
import { interval, Subscription } from 'rxjs';
import { SPEED_SERVER } from 'src/app/shared/const/variables';

@Component({
  selector: 'app-stock-bar',
  templateUrl: './stock-bar.component.html',
  styleUrls: ['./stock-bar.component.scss']
})
export class StockBarComponent implements AfterViewInit {
  @Input('resources') resourcesProps?: ResourcesInterface;
  @Input('production') productionProps?: PriceInterface;

  public resources = {
    iron: 0,
    clay: 0,
    crop: 0,
    lumber: 0
  };

  private intervalSubscription: Subscription;

  constructor() {}

  getBarStyles(current: number, capacity: number): any {
    const percent = (current / capacity) * 100;

    return {
      'width.%': percent >= 100 ? 101 : percent,
      backgroundColor: percent >= 100 ? '#b73a38' : '#699e32'
    };
  }

  public ngAfterViewInit(): void {
    this.intervalSubscription = interval(1000).subscribe((data) => {
      if (this.productionProps && this.resourcesProps) {
        Object.keys(this.resources).map((item) => {
          // @ts-ignore
          this.resources[item] = ((SPEED_SERVER * this.productionProps[item]) / 3600) * data;
        });
      }
    });
  }
}
