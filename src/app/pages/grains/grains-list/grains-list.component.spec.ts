import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainsListComponent } from './grains-list.component';

describe('GrainsListComponent', () => {
  let component: GrainsListComponent;
  let fixture: ComponentFixture<GrainsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrainsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrainsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
