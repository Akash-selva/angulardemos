import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStringInterpolationComponent } from './app-string-interpolation.component';

describe('AppStringInterpolationComponent', () => {
  let component: AppStringInterpolationComponent;
  let fixture: ComponentFixture<AppStringInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppStringInterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStringInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
