import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Data } from '../models/data';
import { DataService } from '../data.service';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';

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
    private confirmationDialogService: ConfirmationDialogService,
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

  public openConfirmationDialog(id: number) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to remove this track?')
    .then((confirmed) => {
      this.log('User confirmed: ' + confirmed);
      if (confirmed) {
        this.removeData(id);
      }
    })
    .catch(() => this.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  private removeData(id: number): void {
    this.busy = true;
    this.log('removeData ' + id);
    const formData = new FormData();
    formData.append('id', this.data.id.toString());
    this.dataService.removeData(formData).subscribe(res => {
      this.busy = false;
      this.log('removeData done' + id);
      this.router.navigate(['/overview']);
    });
  }

  private log(message: string) {
    console.log('DataDetailComponent: ' + message);
  }
}
