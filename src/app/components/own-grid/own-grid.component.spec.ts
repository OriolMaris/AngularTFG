import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnGridComponent } from './own-grid.component';

describe('OwnGridComponent', () => {
  let component: OwnGridComponent;
  let fixture: ComponentFixture<OwnGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
