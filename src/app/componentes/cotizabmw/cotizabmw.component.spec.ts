import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizabmwComponent } from './cotizabmw.component';

describe('CotizabmwComponent', () => {
  let component: CotizabmwComponent;
  let fixture: ComponentFixture<CotizabmwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizabmwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizabmwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
