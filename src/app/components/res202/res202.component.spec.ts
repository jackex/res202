import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Res202Component } from './res202.component';

describe('Res202Component', () => {
  let component: Res202Component;
  let fixture: ComponentFixture<Res202Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Res202Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Res202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
