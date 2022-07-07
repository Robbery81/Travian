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

  getPercent(current: number, capacity: number): number {
    return (current / capacity) * 100;
  }

  ngOnInit(): void {}
}
