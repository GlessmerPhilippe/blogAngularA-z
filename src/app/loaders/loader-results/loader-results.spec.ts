import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderResults } from './loader-results';

describe('LoaderResults', () => {
  let component: LoaderResults;
  let fixture: ComponentFixture<LoaderResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
