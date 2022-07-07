import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/store/states/app.state';
import { currentVillageSelector } from 'src/app/store/selectors/village.selector';
import { Observable } from 'rxjs';
import { VillageInterface } from 'src/app/shared/interfaces/village.interface';
import { villageAction } from 'src/app/store/actions/vilage.action';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private router: Router, private store: Store<AppStateInterface>) {}

  resource = true;
  currentVillage$?: Observable<VillageInterface | null>;

  ngOnInit(): void {
    this.initializeValues();
    this.router.navigate(['/main/resources']).then();
  }

  public changeBg(page: string): void {
    this.resource = page !== 'village';
  }

  initializeValues(): void {
    console.log('initializeValues dispatch');
    this.store.dispatch(villageAction());
    this.currentVillage$ = this.store.pipe(select(currentVillageSelector));
  }
}
