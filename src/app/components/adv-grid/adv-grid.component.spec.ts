import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvGridComponent } from './adv-grid.component';

describe('AdvGridComponent', () => {
  let component: AdvGridComponent;
  let fixture: ComponentFixture<AdvGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
