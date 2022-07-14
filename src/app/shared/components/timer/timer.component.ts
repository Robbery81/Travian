import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { interval, Subscription } from 'rxjs';

import { TimerInterface } from 'src/app/shared/interfaces/timer.interface';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input('endDate') set onTimerStart(endDate: Date) {
    this.timer = this.setTimerData(endDate);

    this.timerSubscription = interval(1000).subscribe(() => {
      this.timer = this.setTimerData(endDate);
    });
  }

  @Output() timerExpired: EventEmitter<any> = new EventEmitter<any>();

  public timer: TimerInterface = {};
  private timerSubscription: Subscription;

  constructor() {}

  ngOnInit(): void {}

  private setTimerData(endDate: Date): TimerInterface {
    const now = new Date().getTime();
    const distance = endDate.getTime() - now;

    if (distance < 1000) {
      this.timerSubscription.unsubscribe();
      this.timerExpired.next();
    }

    return {
      hours: this.formattingTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
      minutes: this.formattingTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
      seconds: this.formattingTime(Math.floor((distance % (1000 * 60)) / 1000))
    };
  }

  private formattingTime(time: number): string {
    return String(time).length > 1 ? String(time) : `0${time}`;
  }
}
