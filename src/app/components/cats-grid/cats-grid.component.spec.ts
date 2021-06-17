import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsGridComponent } from './cats-grid.component';

describe('CatsGridComponent', () => {
  let component: CatsGridComponent;
  let fixture: ComponentFixture<CatsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
