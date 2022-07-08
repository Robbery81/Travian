import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resourceNamePipe',
  pure: true
})
export class ResourceNamePipe implements PipeTransform {
  transform(str: any, ...args: any[]): any {
    return str[0].toUpperCase() + str.slice(1);
  }
}
