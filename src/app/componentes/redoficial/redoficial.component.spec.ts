import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedoficialComponent } from './redoficial.component';

describe('RedoficialComponent', () => {
  let component: RedoficialComponent;
  let fixture: ComponentFixture<RedoficialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedoficialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedoficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
