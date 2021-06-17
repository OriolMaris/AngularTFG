import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvGrid2Component } from './adv-grid2.component';

describe('AdvGrid2Component', () => {
  let component: AdvGrid2Component;
  let fixture: ComponentFixture<AdvGrid2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvGrid2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvGrid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
