import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { product } from '../product/product-interface';
import * as myGlobals from '../globals';


@Injectable({
  providedIn: 'root'
})
export class ProductsServicce {
  
  private _url: string;
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { 
    this._url = myGlobals.product_service_url
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  // Read All Operation
  getProducts(category_id: number): Observable<{'products': product[]}>{
    const getURL = `${this._url}/${category_id}`
    return this.http.get<{'products': product[]}>(
      getURL,
      this.httpOptions
    ).pipe(
      catchError(this.handleError<{'products': product[]}>('getProducts'))
    )
  }
}
