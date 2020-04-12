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
    this.messageService.add('DataService: fetched data');
    return this.flask.getUploadedDataOverview();
  }

  getData(id: number): Observable<Data> {
    return this.flask.getUploadedDataById(id);
  }

  uploadData(formData: FormData) {
    return this.flask.uploadData(formData);
  }

  updateData(formData: FormData) {
    return this.flask.updateData(formData);
  }

  removeData(formData: FormData) {
    return this.flask.removeData(formData);
  }
}
