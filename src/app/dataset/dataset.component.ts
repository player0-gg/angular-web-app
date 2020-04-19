import { Component, OnInit } from '@angular/core';

import { Data } from '../models/data';
import { DataService } from '../data.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css'],
  providers:  [ DataService ]
})
export class DatasetComponent implements OnInit {
  dataset: Data[];
  selectedData: Data;

  constructor(private dataService: DataService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getDataset();
  }

  onSelect(data: Data): void {
    this.selectedData = data;
    this.messageService.add('DataService: Selected data id=${data.id}');
  }

  getDataset(): void {
    this.dataService.getDataset()
      .subscribe(dataset => {
        this.dataset = dataset;
        console.log(this.dataset);
      });
  }
}
