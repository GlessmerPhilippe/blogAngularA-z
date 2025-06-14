import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleContent } from './article-content';

describe('ArticleContent', () => {
  let component: ArticleContent;
  let fixture: ComponentFixture<ArticleContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
