import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeBindComponent } from './practice-bind.component';

describe('PracticeBindComponent', () => {
  let component: PracticeBindComponent;
  let fixture: ComponentFixture<PracticeBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
