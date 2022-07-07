import { Component, Input, OnInit } from '@angular/core';
import { VillageInterface } from 'src/app/shared/interfaces/village.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('village') villageProps?: VillageInterface;
  constructor() {}

  ngOnInit(): void {}
}
