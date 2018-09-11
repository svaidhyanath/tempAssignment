import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterAmountAndReviewComponentComponent } from './enter-amount-and-review-component.component';

describe('EnterAmountAndReviewComponentComponent', () => {
  let component: EnterAmountAndReviewComponentComponent;
  let fixture: ComponentFixture<EnterAmountAndReviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterAmountAndReviewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterAmountAndReviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
