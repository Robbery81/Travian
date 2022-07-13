import { Component, Input, OnInit } from '@angular/core';

import { ResourcesInterface } from 'src/app/shared/interfaces/resources.interface';

@Component({
  selector: 'app-stock-bar',
  templateUrl: './stock-bar.component.html',
  styleUrls: ['./stock-bar.component.scss']
})
export class StockBarComponent implements OnInit {
  @Input('resources') resourcesProps?: ResourcesInterface;

  constructor() {}

  getBarStyles(current: number, capacity: number): any {
    const percent = (current / capacity) * 100;

    return {
      'width.%': percent >= 100 ? 101 : percent,
      backgroundColor: percent >= 100 ? '#b73a38' : '#699e32'
    };
  }

  ngOnInit(): void {}
}
