import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStyleComponent } from './filter-style.component';

describe('FilterStyleComponent', () => {
  let component: FilterStyleComponent;
  let fixture: ComponentFixture<FilterStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
