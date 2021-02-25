import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucDirectDemoComponent } from './struc-direct-demo.component';

describe('StrucDirectDemoComponent', () => {
  let component: StrucDirectDemoComponent;
  let fixture: ComponentFixture<StrucDirectDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrucDirectDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrucDirectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
