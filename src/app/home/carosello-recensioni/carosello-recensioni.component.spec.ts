import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselloRecensioniComponent } from './carosello-recensioni.component';

describe('CaroselloRecensioniComponent', () => {
  let component: CaroselloRecensioniComponent;
  let fixture: ComponentFixture<CaroselloRecensioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaroselloRecensioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaroselloRecensioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
