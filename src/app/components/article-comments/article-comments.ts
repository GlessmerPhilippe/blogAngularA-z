import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Comment } from '../../models/comment.model';
import { COMMENTS_MOCK } from '../../mocks/comments-mock';
import { LoaderCommentSkeletonComponent } from '../../loaders/loader-comment-skeleton/loader-comment-skeleton';

@Component({
  selector: 'app-article-comments',
  standalone: true,
  imports: [CommonModule, FormsModule, LoaderCommentSkeletonComponent],
  templateUrl: './article-comments.html',
  styleUrls: ['./article-comments.scss']
})
export class ArticleCommentsComponent implements OnInit, OnChanges {
  @Input() articleId?: string;
  comments: Comment[] = [];
  newComment = '';
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
      this.filterComments();
    }, 1200);
  }

  ngOnChanges(changes: SimpleChanges) {
    // Si articleId change ET que le loader est déjà passé, on filtre à chaud
    if ('articleId' in changes && !this.isLoading) {
      this.filterComments();
    }
  }

  filterComments() {
    this.comments = this.articleId
      ? COMMENTS_MOCK.filter(c => c.articleId === this.articleId)
      : COMMENTS_MOCK;
  }

  addComment() {
    if (this.newComment.trim() && this.articleId) {
      this.comments.unshift({
        id: Math.random().toString(36).slice(2),
        articleId: this.articleId,
        author: {
          id: 'me',
          username: 'Moi',
          avatar: 'https://i.pravatar.cc/100?img=8'
        },
        content: this.newComment,
        createdAt: new Date()
      });
      this.newComment = '';
    }
  }
}
