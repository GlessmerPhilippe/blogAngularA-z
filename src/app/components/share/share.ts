import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-share',
  standalone: true,
  templateUrl: './share.html',
  styleUrls: ['./share.scss']
})
export class ShareComponent {
  @Input() article!: { title: string; excerpt: string; slug: string };

  shareArticle(): void {
    const url = window.location.origin + `/articles/${this.article.slug}`;

    if (navigator.share) {
      navigator.share({
        title: this.article.title,
        text: this.article.excerpt,
        url
      }).catch(console.error);
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url)
        .then(() => {
          // À remplacer par un vrai toast/snackbar si tu veux
          alert('URL copiée dans le presse-papiers !');
        })
        .catch(console.error);
    } else {
      prompt('Copie ce lien :', url);
    }
  }
}
