import { Component, OnInit, Input } from '@angular/core';

import { GRAPHDATA } from '../mock-data-set';
import { VisualData, VisualTrack, VisualTrackData } from '../models/visual-data';

@Component({
  selector: 'app-plotlygraph',
  templateUrl: './plotlygraph.component.html',
  styleUrls: ['./plotlygraph.component.css']
})
export class PlotlygraphComponent implements OnInit {
  @Input() visualData: VisualData;

  public graph = GRAPHDATA;
  constructor() { }

  ngOnInit(): void {
    this.generateGraphData();
  }

  private generateGraphData() {
    this.log('generateGraphData');
    const graphData = new Array();
    console.log(this.visualData);
    for (const track in this.visualData.tracks) {
      if (track == null) {
        continue;
      }
      // const name = track.name;
      // const spots = track.data.spots;
      graphData.push(track);
    }
    console.log(graphData);
  }

  private log(message: string) {
    console.log('PlotlygraphComponent: ' + message);
  }
}
