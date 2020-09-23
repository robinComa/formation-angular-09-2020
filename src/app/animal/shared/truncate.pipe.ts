import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(text: string, size: number = 20, suffix: string = '...'): string {
    if (text?.length > size) {
      return text.slice(0, size - suffix.length) + suffix;
    } else {
      return text;
    }
  }
}
