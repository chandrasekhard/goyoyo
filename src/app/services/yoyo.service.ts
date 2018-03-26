import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as endpoints from '../helper/helper.endpoints';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class YoyoService {


  constructor(private http: HttpClient) { }

  // Generic HTTP GET REQUEST
  getRequest(url: string): Observable<any> {
    return this.http.get(url)
      .pipe(map((resp) => resp), catchError(this.handleError));
  }

  // Generic HTTP POST REQUEST with optional header
  postRequest(url: string, payload: any, header?: any): Observable<any> {
    return this.http.post(url, payload, header)
      .pipe(map((resp) => resp), catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  // Service Call for Search Hotel
  searchHotel(req): Observable<any> {
    console.log('request object to service ', req);
    return this.postRequest(endpoints.searchHotels, req);
  }

}
