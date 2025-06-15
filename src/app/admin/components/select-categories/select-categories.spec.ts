import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCategories } from './select-categories';

describe('SelectCategories', () => {
  let component: SelectCategories;
  let fixture: ComponentFixture<SelectCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectCategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
