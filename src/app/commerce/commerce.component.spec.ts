import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommerceComponent } from './commerce.component';

describe('CommerceComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CommerceComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CommerceComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mundo-naturali'`, () => {
    const fixture = TestBed.createComponent(CommerceComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mundo-naturali');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(CommerceComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to mundo-naturali!');
  });
});
