import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capacityPipe',
  pure: true
})
export class CapacityPipe implements PipeTransform {
  transform(str: any, capacity: any): any {
    return str > capacity ? capacity : str;
  }
}
