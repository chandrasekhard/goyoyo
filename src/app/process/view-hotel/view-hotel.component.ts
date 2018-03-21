import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../../model/hotel.model';

import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'yoyo-view-hotel',
  templateUrl: './view-hotel.component.html',
  styleUrls: ['./view-hotel.component.scss']
})
export class ViewHotelComponent implements OnInit {

  selectedHotel: Observable<Hotel>;

  constructor(private store: Store<any>, private router: Router) {
    this.selectedHotel = store.pipe(select((s) => s.appState.currentHotel));
   }

  ngOnInit() {
  }

}
