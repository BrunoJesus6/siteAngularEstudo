import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JujutsuKaisenComponent } from './jujutsu-kaisen.component';

describe('JujutsuKaisenComponent', () => {
  let component: JujutsuKaisenComponent;
  let fixture: ComponentFixture<JujutsuKaisenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JujutsuKaisenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JujutsuKaisenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
