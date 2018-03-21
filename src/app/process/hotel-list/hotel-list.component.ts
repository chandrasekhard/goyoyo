import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../../model/hotel.model';
import { Observable } from 'rxjs/Observable';

import { Store, select } from '@ngrx/store';

import * as yoyoActions from '../../action/yoyo-action';

@Component({
  selector: 'yoyo-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  hotelList: Observable<Hotel[]>;
  hotelKey: Observable<string>;

  constructor(private store: Store<any>, private router: Router) {
    this.hotelList = store.pipe(select((s) => s.appState.allHotels));
    this.hotelKey = store.pipe(select((s) => {
      console.log('sss', s);
      return s.appState.searchKey
    }));
  }

  ngOnInit() {
  }

  changeSearch(){
    console.log('Change search button clicked...');
    this.router.navigate(['/search']);
  }

  viewHotelDetails(hotel){
    console.log('View Hotel button clicked...');
    this.store.dispatch({ type: yoyoActions.HOTEL_VIEW, payload: hotel});
    this.router.navigate(['/view']);
  }
}
