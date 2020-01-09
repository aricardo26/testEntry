import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTypeRendererComponent } from './filter-type-renderer.component';

describe('FilterTypeRendererComponent', () => {
  let component: FilterTypeRendererComponent;
  let fixture: ComponentFixture<FilterTypeRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTypeRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTypeRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
