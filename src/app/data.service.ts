import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Data } from './models/data';
import { DATASET } from './mock-data-set';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getDataset(): Observable<Data[]> {
    return of(DATASET);
  }
}
