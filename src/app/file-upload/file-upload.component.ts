import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';

import { DataService } from '../data.service';
import { MessageService } from '../message.service';

/*
example:
https://medium.com/techiediaries-com/uploading-files-with-formdata-and-post-requests-using-angular-9-httpclient-762d804dd68c
*/
export interface FileUploadConfig {
  data?: any;
  inProgress: boolean;
  progress: number;
}

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @ViewChild('fileUpload', {static: false}) fileUpload: ElementRef;
  files = [];
  constructor(private dataService: DataService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  send(fileUploadConfig: FileUploadConfig) {
    this.log('sending file ' + fileUploadConfig.data.name);
    const formData = new FormData();
    formData.append('file', fileUploadConfig.data);
    fileUploadConfig.inProgress = true;
    this.dataService.uploadData(formData).subscribe((event: any) => {
        if (typeof (event) === 'object') {
          console.log(event.body);
        }
      });
  }
  private uploadFiles() {
    this.log('uploadFiles');
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      this.send(file);
    });
  }
  onClick() {
    this.log('onClick');
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      this.log('fileUpload.onchange');
      for (const file in fileUpload.files) {
        if (file) {
          const fileConfig = { data: file, inProgress: false, progress: 0};
          this.files.push(fileConfig);
        }
      }
      this.uploadFiles();
    };
    fileUpload.click();
  }

  private log(message: string) {
    console.log('FileUploadComponent: ' + message);
  }
}
