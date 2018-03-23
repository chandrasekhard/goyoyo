import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { YoyoService } from '../services/yoyo.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import * as yoyoActions from '../action/yoyo-action';

@Injectable()
export class YoyoEffects {
    constructor(private action: Actions, private store: Store<any>, private yoyoService: YoyoService) { }

    @Effect()
    searchHotel: Observable<any> = this.action
        .ofType(yoyoActions.HOTEL_SEARCH)
        .switchMap((actionObject) =>  {
            console.log('in yoyo effects');

           return this.yoyoService.searchHotel(actionObject['payload'])
						.map((resp) => {
							return (resp.status === 'error') ?
								new yoyoActions.HotelSearchFailed({ message: 'error occured', status: resp.status })
								: new yoyoActions.HotelSearchSuccess(resp.msg);
						})
						.catch((err) => Observable.of({ type: yoyoActions.HOTEL_SEARCH_FAILED, payload: { message: err, status: 'error' } }))
        });

}