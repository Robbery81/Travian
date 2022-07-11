import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss']
})
export class MainButtonComponent implements OnInit {
  @Input('text') textProps: string;

  constructor() {}

  ngOnInit(): void {}
}
