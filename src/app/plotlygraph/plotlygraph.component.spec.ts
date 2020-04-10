import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlygraphComponent } from './plotlygraph.component';

describe('PlotlygraphComponent', () => {
  let component: PlotlygraphComponent;
  let fixture: ComponentFixture<PlotlygraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotlygraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotlygraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
