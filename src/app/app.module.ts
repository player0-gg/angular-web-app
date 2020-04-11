import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatasetComponent } from './dataset/dataset.component';
import { PlotlygraphComponent } from './plotlygraph/plotlygraph.component';

import { PlotlyViaCDNModule  } from 'angular-plotly.js';
import { DataDetailComponent } from './data-detail/data-detail.component';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
PlotlyViaCDNModule.plotlyVersion = 'latest';
PlotlyViaCDNModule.plotlyBundle = null;

import { FlaskService } from './flask.service';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    DatasetComponent,
    PlotlygraphComponent,
    DataDetailComponent,
    FileUploadComponent,
    MessagesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PlotlyViaCDNModule,
    BrowserAnimationsModule
  ],
  providers: [
    FlaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
