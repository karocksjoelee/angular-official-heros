import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCommunicationCookbookComponent } from './comp-communication-cookbook.component';

describe('CompCommunicationCookbookComponent', () => {
  let component: CompCommunicationCookbookComponent;
  let fixture: ComponentFixture<CompCommunicationCookbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompCommunicationCookbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCommunicationCookbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
