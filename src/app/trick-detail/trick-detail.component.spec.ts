import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrickDetailComponent } from './trick-detail.component';

describe('TrickDetailComponent', () => {
  let component: TrickDetailComponent;
  let fixture: ComponentFixture<TrickDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrickDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrickDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
