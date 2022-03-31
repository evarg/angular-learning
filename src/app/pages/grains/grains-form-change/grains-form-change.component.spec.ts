import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainsFormChangeComponent } from './grains-form-change.component';

describe('GrainsFormChangeComponent', () => {
  let component: GrainsFormChangeComponent;
  let fixture: ComponentFixture<GrainsFormChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrainsFormChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrainsFormChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
