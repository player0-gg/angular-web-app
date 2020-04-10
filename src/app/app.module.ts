import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatasetComponent } from './dataset/dataset.component';
import { PlotlygraphComponent } from './plotlygraph/plotlygraph.component';

import { PlotlyViaCDNModule  } from 'angular-plotly.js';
import { DataDetailComponent } from './data-detail/data-detail.component';
PlotlyViaCDNModule.plotlyVersion = 'latest';
PlotlyViaCDNModule.plotlyBundle = null;

@NgModule({
  declarations: [
    AppComponent,
    DatasetComponent,
    PlotlygraphComponent,
    DataDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PlotlyViaCDNModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
