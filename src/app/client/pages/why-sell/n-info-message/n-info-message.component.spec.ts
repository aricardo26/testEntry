import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NInfoMessageComponent } from './n-info-message.component';

describe('NInfoMessageComponent', () => {
  let component: NInfoMessageComponent;
  let fixture: ComponentFixture<NInfoMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NInfoMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NInfoMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
