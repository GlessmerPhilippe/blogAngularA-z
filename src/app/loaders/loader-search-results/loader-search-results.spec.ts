import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderSearchResults } from './loader-search-results';

describe('LoaderSearchResults', () => {
  let component: LoaderSearchResults;
  let fixture: ComponentFixture<LoaderSearchResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderSearchResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderSearchResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
