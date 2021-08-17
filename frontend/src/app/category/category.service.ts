import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { category } from './category-interface';
import { catchError, map, tap } from 'rxjs/operators';
import * as myGlobals from '../globals';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private _url: string;
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) {
    this._url = myGlobals.category_service_url
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
  getCategories(): Observable<{'categories': category[]}>{
    return this.http.get<{'categories': category[]}>(
      this._url,
      this.httpOptions
    ).pipe(
      catchError(this.handleError<{'categories': category[]}>('getCategories', {'categories': []}))
    )
  }
  
  // Read One
  getCategory(category_id: number): Observable<category>{
    const getURL = `${this._url}/${category_id}`
    return this.http.get<category>(
      getURL,
      this.httpOptions
      ).pipe(
      tap( // Log the result or error
        data => console.log("Inside http get request", data)
      ),
      catchError(this.handleError<category>(`getProduct`))
    )
  }
  
  // Delete Operation
  deleteCategory(category_id: number): Observable<any>{
    const deleteURL = `${this._url}/${category_id}`
    console.log("Delete URL" ,deleteURL);
    return this.http.delete<category>(deleteURL, this.httpOptions).pipe(
      catchError(this.handleError<any>('deleteCategory')) 
    )
  }
  
  // Update Operation
  updateCategory(data: category): Observable<any>{
    const updateURL = `${this._url}`
    return this.http.put<category>(updateURL, data, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateCategory', ))
    )
  }
  
  // Create Operation
  createCategory(data: category): Observable<any>{
    const createURL = this._url
    return this.http.post<category>(createURL, data, this.httpOptions).pipe(
      tap((newCategory: category) => console.log('create category with id = ${newCategory.id}')),
      catchError(this.handleError('createCategory'))
    )
  }
}
