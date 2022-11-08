import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointCard2Component } from './point-card2.component';

describe('PointCard2Component', () => {
  let component: PointCard2Component;
  let fixture: ComponentFixture<PointCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointCard2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
