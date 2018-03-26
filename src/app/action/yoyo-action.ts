import { Action } from '@ngrx/store';

// export const USER_LOGIN = 'USER_LOGIN';

// export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
// export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export const HOTEL_SEARCH = 'HOTEL_SEARCH';
export const HOTEL_SEARCH_SUCCESS = 'HOTEL_SEARCH_SUCCESS';
export const HOTEL_SEARCH_FAILED = 'HOTEL_SEARCH_FAILED';

export const HOTEL_VIEW = 'HOTEL_VIEW';
export const HOTEL_VIEW_SUCCESS = 'HOTEL_VIEW_SUCCESS';
export const HOTEL_VIEW_FAILED = 'HOTEL_VIEW_FAILED';


export class HotelSearchSuccess implements Action {
	readonly type = HOTEL_SEARCH_SUCCESS;
	constructor(public payload: any) { }
}
export class HotelSearchFailed implements Action {
	readonly type = HOTEL_SEARCH_FAILED;
	constructor(public payload: any) { }
}

export class HotelViewSuccess implements Action {
	readonly type = HOTEL_VIEW_SUCCESS;
	constructor(public payload: any) { }
}
export class HotelViewFailed implements Action {
	readonly type = HOTEL_VIEW_FAILED;
	constructor(public payload: any) { }
}
