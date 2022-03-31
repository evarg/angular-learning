import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainsFormAddComponent } from './grains-form-add.component';

describe('GrainsFormAddComponent', () => {
  let component: GrainsFormAddComponent;
  let fixture: ComponentFixture<GrainsFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrainsFormAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrainsFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
