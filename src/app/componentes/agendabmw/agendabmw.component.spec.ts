import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendabmwComponent } from './agendabmw.component';

describe('AgendabmwComponent', () => {
  let component: AgendabmwComponent;
  let fixture: ComponentFixture<AgendabmwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendabmwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendabmwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
