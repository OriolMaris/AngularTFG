import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavGridComponent } from './fav-grid.component';

describe('FavGridComponent', () => {
  let component: FavGridComponent;
  let fixture: ComponentFixture<FavGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
