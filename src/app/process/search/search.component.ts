import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import * as yoyoActions from '../../action/yoyo-action';

@Component({
  selector: 'yoyo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchString = '';
  maxHotelsDisplay = '';
  
  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit() {
  }

  findHotels(){
    console.log('find hotels button clicked...');
    console.log('search String ', this.searchString);
    console.log('search String ', this.maxHotelsDisplay);
    this.store.dispatch({ type: yoyoActions.HOTEL_SEARCH, payload: {hotelName:this.searchString, maxCount:this.maxHotelsDisplay}});
    this.router.navigate(['/result']);
  }
}
