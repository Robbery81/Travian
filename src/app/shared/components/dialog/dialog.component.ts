import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ResourceFieldTypeEnum } from 'src/app/shared/enums/resource-field-type.enum';

import { PriceInterface } from 'src/app/shared/interfaces/price.interface';

export interface DialogConfig {
  type: ResourceFieldTypeEnum;
  level: number;
  productionCurrent: number;
  productionNext: number;
  price?: PriceInterface;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogConfig) {}

  public ngOnInit(): void {}

  public onClosePopup(): void {
    this.onClose.emit();
  }
}
