import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderSkeleton } from './loader-skeleton';

describe('LoaderSkeleton', () => {
  let component: LoaderSkeleton;
  let fixture: ComponentFixture<LoaderSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
