import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainsDetailsComponent } from './grains-details.component';

describe('GrainsDetailsComponent', () => {
  let component: GrainsDetailsComponent;
  let fixture: ComponentFixture<GrainsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrainsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrainsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
