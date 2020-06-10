import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../models/order';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Order, ...args: any[]): number {
    if (value) {
      if (args.length > 0) {
        // return total ttc
        return (value.tjmHt * value.nbJours) * (1 + value.tva / 100);
      }
      // return total ht
      return value.tjmHt * value.nbJours;
    }
    return null;
  }

}
