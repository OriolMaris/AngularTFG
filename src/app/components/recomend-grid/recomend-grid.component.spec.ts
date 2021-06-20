import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendGridComponent } from './recomend-grid.component';

describe('RecomendGridComponent', () => {
  let component: RecomendGridComponent;
  let fixture: ComponentFixture<RecomendGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
