import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BuildingDto } from 'src/app/shared/interfaces/building.dto';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.scss']
})
export class BuildingListComponent {
  @Input('info') infoProps: BuildingDto;
  @Output() buildingResolve: EventEmitter<any> = new EventEmitter<any>();
}
