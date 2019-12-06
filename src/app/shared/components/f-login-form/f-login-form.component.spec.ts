import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FLoginFormComponent } from './f-login-form.component';

describe('FLoginFormComponent', () => {
  let component: FLoginFormComponent;
  let fixture: ComponentFixture<FLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
