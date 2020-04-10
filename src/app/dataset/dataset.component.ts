import { Component, OnInit } from '@angular/core';
import { Data } from '../models/data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent implements OnInit {
  dataset: Data[];
  selectedData: Data;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getDataset();
  }

  onSelect(data: Data): void {
    this.selectedData = data;
  }

  getDataset(): void {
    this.dataService.getDataset()
      .subscribe(dataset => this.dataset = dataset);
  }
}
