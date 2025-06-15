import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etat } from './etat';

describe('Etat', () => {
  let component: Etat;
  let fixture: ComponentFixture<Etat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
