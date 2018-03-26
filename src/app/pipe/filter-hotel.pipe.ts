import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHotel'
})
export class FilterHotelPipe implements PipeTransform {

  transform(value: any, searchKey?: any): any {
    console.log('searchKey', searchKey);
    console.log('inside pipe', value );
    return value.filter((hotel) => {
      return (hotel.City === searchKey) ? true : false;
    });
  }

}
