import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerStepsComponent } from './seller-steps.component';

describe('SellerStepsComponent', () => {
  let component: SellerStepsComponent;
  let fixture: ComponentFixture<SellerStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
