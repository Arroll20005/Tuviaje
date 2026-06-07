import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterarioComponent } from './iterario.component';

describe('IterarioComponent', () => {
  let component: IterarioComponent;
  let fixture: ComponentFixture<IterarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IterarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IterarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
