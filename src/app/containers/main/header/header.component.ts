import { Component, OnInit } from '@angular/core';
import { VillageInterface } from 'src/app/shared/interfaces/village.interface';
import { select, Store } from '@ngrx/store';
import { currentVillageSelector } from 'src/app/store/selectors/village.selector';
import { AppStateInterface } from 'src/app/store/states/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<AppStateInterface>) {}

  public currentVillage$?: Observable<VillageInterface | null>;

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.currentVillage$ = this.store.pipe(select(currentVillageSelector));
  }
}
