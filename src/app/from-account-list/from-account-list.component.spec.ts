import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromAccountListComponent } from './from-account-list.component';

describe('FromAccountListComponent', () => {
  let component: FromAccountListComponent;
  let fixture: ComponentFixture<FromAccountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromAccountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
