import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Data } from './models/data';
import { DATASET } from './mock-data-set';

import { MessageService } from './message.service';
import { FlaskService } from './flask.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private messageService: MessageService, private flask: FlaskService) { }

  getDataset(): Observable<Data[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(DATASET);
    // return this.flask.getUploadedDataOverview();
  }

  getData(id: number): Observable<Data> {
    return of(DATASET.find(data => data.id === id));
  }
}
