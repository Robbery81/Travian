import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buildTimePipe',
  pure: true
})
export class BuildTimePipe implements PipeTransform {
  transform(str: any, ...args: any[]): any {
    const h = this.formattingTime(Math.floor((str % (60 * 60 * 24)) / (60 * 60)));
    const m = this.formattingTime(Math.floor((str % (60 * 60)) / 60));
    const s = this.formattingTime(Math.floor(str % 60));

    return `${h}:${m}:${s}`;
  }

  private formattingTime(time: number): string {
    return String(time).length > 1 ? String(time) : `0${time}`;
  }
}
