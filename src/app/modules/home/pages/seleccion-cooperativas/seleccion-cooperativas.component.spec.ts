import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionCooperativasComponent } from './seleccion-cooperativas.component';

describe('SeleccionCooperativasComponent', () => {
  let component: SeleccionCooperativasComponent;
  let fixture: ComponentFixture<SeleccionCooperativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionCooperativasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeleccionCooperativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
