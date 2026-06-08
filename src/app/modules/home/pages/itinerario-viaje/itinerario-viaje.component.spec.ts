import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinerarioViajeComponent } from './itinerario-viaje.component';

describe('ItinerarioViajeComponent', () => {
  let component: ItinerarioViajeComponent;
  let fixture: ComponentFixture<ItinerarioViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItinerarioViajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItinerarioViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
