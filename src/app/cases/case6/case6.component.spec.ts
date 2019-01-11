import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Case6Component } from './case6.component';

describe('Case6Component', () => {
  let component: Case6Component;
  let fixture: ComponentFixture<Case6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Case6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Case6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
