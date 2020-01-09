import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaFiltersComponent } from './mega-filters.component';

describe('MegaFiltersComponent', () => {
  let component: MegaFiltersComponent;
  let fixture: ComponentFixture<MegaFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
