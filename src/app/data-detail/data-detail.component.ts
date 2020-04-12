import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Data } from '../models/data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css']
})
export class DataDetailComponent implements OnInit {
  @Input() data: Data;
  public editMode: boolean;
  public busy: boolean;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getData(id)
      .subscribe(data => this.data = data);
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    this.busy = true;
    this.log('update initiated');
    const formData = new FormData();
    formData.append('id', this.data.id.toString());
    formData.append('title', this.data.title);
    formData.append('comment', this.data.comment);
    this.dataService.updateData(formData).subscribe(res => {
      this.busy = false;
      this.log('update done');
      this.router.navigate(['/overview']);
    });
  }

  removeData(id: number): void {
    // TODO: show a confirm pop up before
    this.busy = true;
    this.log('removeData ' + id);
    const formData = new FormData();
    formData.append('id', this.data.id.toString());
    this.dataService.removeData(formData).subscribe(res => {
      this.busy = false;
      this.log('removeData done');
      this.router.navigate(['/overview']);
    });
  }

  private log(message: string) {
    console.log('DataDetailComponent: ' + message);
  }
}
