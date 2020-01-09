import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCommerceComponent } from './sidebar-commerce.component';

describe('SidebarCommerceComponent', () => {
  let component: SidebarCommerceComponent;
  let fixture: ComponentFixture<SidebarCommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarCommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
