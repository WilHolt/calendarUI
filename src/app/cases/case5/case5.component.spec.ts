import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Case5Component } from './case5.component';

describe('Case5Component', () => {
  let component: Case5Component;
  let fixture: ComponentFixture<Case5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Case5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Case5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
