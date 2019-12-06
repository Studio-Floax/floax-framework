import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NTitleComponent } from './n-title.component';

describe('NTitleComponent', () => {
  let component: NTitleComponent;
  let fixture: ComponentFixture<NTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
