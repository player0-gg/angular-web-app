import { Component, OnInit } from '@angular/core';
import { Data } from '../models/data';
import { DATASET } from '../mock-data-set';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent implements OnInit {
  dataset = DATASET;
  selectedData: Data;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(data: Data): void {
    this.selectedData = data;
  }
}
