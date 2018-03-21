import * as yoyoActions from '../action/yoyo-action';

import { Hotel } from '../model/hotel.model';

export interface Hotels {
	hotelId: string;
	hotelName: string;
	address1: string;
	address2: string;
	city: string;
	pincode: string;
	dayRate: string;
	nightRate: string;
}

export interface YoYoAppState {
	allHotels: Hotels[];
	currentHotel: Hotel;
	searchKey: string;
}

export const INIT_STATE: YoYoAppState = {
	allHotels: [],
	currentHotel: null,
	searchKey: ''
}


// Root Reducer
export function yoyoRootReducer(state: YoYoAppState = INIT_STATE, action): YoYoAppState {
	console.log('Received Action ---->>>>', action);

	switch (action.type) {
		// All Admin Actions here...
		case yoyoActions.HOTEL_SEARCH:
			console.log('hotel search action');
			console.log('payload', action.payload);
			return Object.assign({}, state, {
				searchKey: action.payload.hotelName
			});

		case yoyoActions.HOTEL_SEARCH_SUCCESS:
			console.log('hotel search success');
			console.log('successPayload', action.payload);
			console.log('state', state);

			return Object.assign({}, state, {
				allHotels: action.payload
			});

		case yoyoActions.HOTEL_SEARCH_FAILED:
			console.log('hotel search failed');
			console.log('failedPayload', action.payload);
			return Object.assign({}, state);


		// All Admin Actions here...
		case yoyoActions.HOTEL_VIEW:
			console.log('view hotel details action');
			console.log('payload', action.payload);
			return Object.assign({}, state, {
				currentHotel: action.payload
			});

		default: return state;
	}
}