import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTags } from './select-tags';

describe('SelectTags', () => {
  let component: SelectTags;
  let fixture: ComponentFixture<SelectTags>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectTags]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectTags);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
