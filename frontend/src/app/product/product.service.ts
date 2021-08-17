import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { productInfo } from './product-interface';
import * as myGlobals from '../globals';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
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
  
  // Read One
  getProduct(product_id: number): Observable<productInfo>{
    const getURL = `${this._url}/product/${product_id}`
    return this.http.get<productInfo>(getURL, this.httpOptions).pipe(
      catchError(this.handleError<productInfo>('getProductInfo id=${id}'))
    )
  }
  
  // Delete Operation
  deleteProduct(product_id: number): Observable<any>{
    const deleteURL = `${this._url}/${product_id}`
    return this.http.delete<productInfo>(deleteURL, this.httpOptions).pipe(
      catchError(this.handleError<any>('deleteProductInfo')) 
    )
  }
  
  // Update Operation
  updateProduct(data: productInfo): Observable<any>{
    const updateURL = this._url
    console.log("URL ", updateURL)
    console.log(data)
    return this.http.put<productInfo>(updateURL, data, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateProductInfo'))
    )
  }
  
  // Create Operation
  createProduct(data: productInfo, catergory_id: number): Observable<any>{
    const createURL = `${this._url}/${catergory_id}`
    return this.http.post<productInfo>(createURL, data, this.httpOptions).pipe(
      tap((newProduct: productInfo) => console.log('create product with id')),
      catchError(this.handleError('createProduct'))
    )
  }
}
