import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointCard3Component } from './point-card3.component';

describe('PointCard3Component', () => {
  let component: PointCard3Component;
  let fixture: ComponentFixture<PointCard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointCard3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
