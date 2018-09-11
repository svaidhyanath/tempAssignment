import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromToComponentComponent } from './from-to-component.component';

describe('FromToComponentComponent', () => {
  let component: FromToComponentComponent;
  let fixture: ComponentFixture<FromToComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromToComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromToComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
