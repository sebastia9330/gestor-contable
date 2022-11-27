import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPreComponent } from './ingresar-pre.component';

describe('IngresarPreComponent', () => {
  let component: IngresarPreComponent;
  let fixture: ComponentFixture<IngresarPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarPreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
