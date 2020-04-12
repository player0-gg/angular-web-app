import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, of, EMPTY } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Data } from './models/data';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    Authorization: 'authkey',
    userid: '1'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FlaskService {
  SERVER = 'http://localhost:5000/api/';
  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService) { }

  public getUploadedDataById(id: number) {
    return this.httpClient.get<Data>(this.SERVER + 'uploaded_data/' + id);
  }

  public getUploadedDataOverview(): Observable<Data[]> {
    this.log('fetched heroes');
    return this.httpClient.get<Data[]>(this.SERVER + 'uploaded_data')
      .pipe(
        catchError(this.handleError<Data[]>('getUploadedDataOverview', []))
      );
  }

  public uploadData(formData: FormData) {
    return this.post(formData, 'upload');
  }

  public updateData(formData: FormData) {
    return this.post(formData, 'update');
  }

  public removeData(formData: FormData) {
    return this.post(formData, 'remove');
  }

  private post<T>(formData: FormData, route: string) {
    this.log('FlaskService: post for route ' + route);
    // return this.httpClient.post<T>(this.SERVER + route, formData, httpOptions);

    return this.httpClient.post<T>(this.SERVER + route, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  // private get<T>(route: string) {
  //   this.log('FlaskService: get for route ' + route);
  //   return this.httpClient.get<T>(this.SERVER + route)
  //   .pipe(
  //     catchError(this.handleError<T>('getUploadedDataOverview', EMPTY))
  //   );
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(operation + ' failed: err_msg = ' + error.message);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('FlaskService: ' + message);
    this.messageService.add('FlaskService: ' + message);
  }
}
