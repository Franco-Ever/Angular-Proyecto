import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionxComponent } from './informacionx.component';

describe('InformacionxComponent', () => {
  let component: InformacionxComponent;
  let fixture: ComponentFixture<InformacionxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
