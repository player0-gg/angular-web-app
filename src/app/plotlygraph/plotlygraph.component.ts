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

  public graph;
  constructor() { }

  ngOnInit(): void {
    this.generateGraphData();
  }

  private generateGraphData() {
    this.log('generateGraphData');
    const graphData = new Array();
    console.log(this.visualData);
    for (const track of this.visualData.tracks) {
      if (track == null) {
        continue;
      }
      graphData.push(this.trackDataToGraphData(track.data));
      if (graphData.length > 30) {
        break;
      }
    }

    this.graph = {
      data: graphData ,
      layout: {width: 800, height: 600, title: 'tracked positions',
      xaxis: {
        title: { text: 'tracks', }
        }
      }
    };
    console.log(graphData);
  }

  private trackDataToGraphData(track: VisualTrackData) {
    return {
      x: track.spots.x,
      y: track.spots.y,
      z: track.spots.z,
      name: track.attrib.name,
      type: 'scatter3d',
      mode: 'markers',
      marker: {size: 3, color: this.getRandomColor(), opacity: 0.6}
    };
  }

  getRandomColor() {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  private log(message: string) {
    console.log('PlotlygraphComponent: ' + message);
  }
}
