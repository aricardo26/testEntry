import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClientComponent } from './client.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ClientComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ClientComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mundo-naturali'`, () => {
    const fixture = TestBed.createComponent(ClientComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mundo-naturali');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ClientComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to mundo-naturali!');
  });
});
