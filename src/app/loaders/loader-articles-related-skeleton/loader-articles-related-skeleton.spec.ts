import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderArticlesRelatedSkeleton } from './loader-articles-related-skeleton';

describe('LoaderArticlesRelatedSkeleton', () => {
  let component: LoaderArticlesRelatedSkeleton;
  let fixture: ComponentFixture<LoaderArticlesRelatedSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderArticlesRelatedSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderArticlesRelatedSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
