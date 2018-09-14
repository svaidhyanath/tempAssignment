import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeePageComponent } from './payee-page.component';

describe('PayeePageComponent', () => {
  let component: PayeePageComponent;
  let fixture: ComponentFixture<PayeePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayeePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
