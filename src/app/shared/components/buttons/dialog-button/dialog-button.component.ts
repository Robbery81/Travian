import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-button',
  templateUrl: './dialog-button.component.html',
  styleUrls: ['./dialog-button.component.scss']
})
export class DialogButtonComponent implements OnInit {
  @Input('path') pathProps: string;

  constructor() {}

  ngOnInit(): void {}
}
