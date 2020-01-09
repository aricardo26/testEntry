import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterValuesRendererComponent } from './filter-values-renderer.component';

describe('FilterValuesRendererComponent', () => {
  let component: FilterValuesRendererComponent;
  let fixture: ComponentFixture<FilterValuesRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterValuesRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterValuesRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
