import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPropertyBindingComponent } from './app-property-binding.component';

describe('AppPropertyBindingComponent', () => {
  let component: AppPropertyBindingComponent;
  let fixture: ComponentFixture<AppPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPropertyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
