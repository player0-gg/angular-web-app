import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../models/data';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css']
})
export class DataDetailComponent implements OnInit {
  @Input() data: Data;

  constructor() { }

  ngOnInit(): void {
  }

}
