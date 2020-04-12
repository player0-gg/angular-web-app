import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Data } from './models/data';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FlaskService {
  SERVER = 'http://localhost:5000/api/';
  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService) { }

  public getUploadedDataById(id: number) {
    return this.httpClient.get<Data>(this.SERVER + 'uploaded_data/1');
  }

  public getUploadedDataOverview(): Observable<Data[]> {
    this.messageService.add('FlaskService: fetched heroes');
    return this.httpClient.get<Data[]>(this.SERVER + 'uploaded_data')
      .pipe(
        catchError(this.handleError<Data[]>('getUploadedDataOverview', []))
      );
  }

  public sendFormData(formData) {
    return this.httpClient.post<any>(this.SERVER + 'uploaded_data', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

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
      this.log('${operation} failed: ${error.message}');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('FlaskService: ${message}');
  }
}
