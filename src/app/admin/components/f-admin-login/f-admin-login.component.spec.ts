import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FAdminLoginComponent } from './f-admin-login.component';

describe('FAdminLoginComponent', () => {
  let component: FAdminLoginComponent;
  let fixture: ComponentFixture<FAdminLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FAdminLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
