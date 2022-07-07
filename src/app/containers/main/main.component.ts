import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { villageAction } from 'src/app/store/actions/village.action';

import { AppStateInterface } from 'src/app/store/states/app.state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private router: Router, private store: Store<AppStateInterface>) {}

  resource = true;

  ngOnInit(): void {
    this.initializeValues();
    this.router.navigate(['/main/resources']).then();
  }

  initializeValues(): void {
    this.store.dispatch(villageAction());
  }

  public changeBg(page: string): void {
    this.resource = page !== 'village';
  }
}
