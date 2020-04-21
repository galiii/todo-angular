import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperQuizComponent } from './wrapper-quiz.component';

describe('WrapperQuizComponent', () => {
  let component: WrapperQuizComponent;
  let fixture: ComponentFixture<WrapperQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
