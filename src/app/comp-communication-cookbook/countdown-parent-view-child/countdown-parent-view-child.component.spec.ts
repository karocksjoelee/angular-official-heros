import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownParentViewChildComponent } from './countdown-parent-view-child.component';

describe('CountdownParentViewChildComponent', () => {
  let component: CountdownParentViewChildComponent;
  let fixture: ComponentFixture<CountdownParentViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownParentViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownParentViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
