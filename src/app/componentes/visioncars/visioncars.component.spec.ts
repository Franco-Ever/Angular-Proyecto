import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisioncarsComponent } from './visioncars.component';

describe('VisioncarsComponent', () => {
  let component: VisioncarsComponent;
  let fixture: ComponentFixture<VisioncarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisioncarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisioncarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
