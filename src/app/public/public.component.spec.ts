import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PublicComponent } from './public.component';

describe('PublicComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PublicComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PublicComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'nebula'`, () => {
    const fixture = TestBed.createComponent(PublicComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('nebula');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PublicComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('nebula app is running!');
  });
});
