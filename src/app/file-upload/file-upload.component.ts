import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FlaskService } from '../flask.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @ViewChild('fileUpload', {static: false}) fileUpload: ElementRef;
  files  = [];
  constructor(private flaskService: FlaskService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  sendFile(file) {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    this.flaskService.sendFormData(formData).subscribe((event: any) => {
        if (typeof (event) === 'object') {
          console.log(event.body);
          this.messageService.add(event.body);
        }
      });
  }
  private sendFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      this.sendFile(file);
    });
  }
  onClick() {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      for (const file in fileUpload.files.length) {
        if (file) {
          this.files.push({ data: file, inProgress: false, progress: 0});
        }
      }
      this.sendFiles();
    };
    fileUpload.click();
  }

}
