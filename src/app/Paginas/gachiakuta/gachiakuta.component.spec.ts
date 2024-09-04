import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GachiakutaComponent } from './gachiakuta.component';

describe('GachiakutaComponent', () => {
  let component: GachiakutaComponent;
  let fixture: ComponentFixture<GachiakutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GachiakutaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GachiakutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
