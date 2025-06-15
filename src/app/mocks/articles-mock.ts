import { Article } from '../models/article.model';

export const ARTICLES_MOCK: Article[] = [
{
  id: '1',
  title: 'Angular 19 : Ce qui change vraiment',
  slug: 'angular-19-nouveautes',
  excerpt: 'Découvre les évolutions majeures du framework Angular 19…',
  content: `Qu'est-ce que le Lorem Ipsum?
Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.

Pourquoi l'utiliser?
On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).

D'où vient-il?
Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.

L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).

Où puis-je m'en procurer?
Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.
`,
  featuredImage: 'https://picsum.photos/300/200?random=1',
images: [
    'https://picsum.photos/id/1015/600/400',
    'https://picsum.photos/id/1016/600/400',
    'https://picsum.photos/id/1018/600/400',
    'https://picsum.photos/id/1025/600/400',
    'https://picsum.photos/id/1033/600/400',
    'https://picsum.photos/id/1041/600/400',
    'https://picsum.photos/id/1050/600/400',
    'https://picsum.photos/id/1062/600/400',
    'https://picsum.photos/id/1074/600/400',
    'https://picsum.photos/id/1084/600/400',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80'
  ],
  videos: [
    { url: 'https://www.youtube.com/watch?v=DKwiFBo8K-o', title: 'Introduction Angular 19', provider: 'youtube' },
    { url: 'https://www.youtube.com/watch?v=K6hCGNbm40o', title: 'Les nouveautés Angular 19' ,provider: 'youtube' },
    { url: 'https://www.youtube.com/watch?v=dABuvKubsdo', title: 'Standalone Components', provider: 'youtube'  },
    { url: 'https://www.youtube.com/watch?v=8z576TNeE6g&list=PLHbz-DWIAPJDvlcKL3Hg_SpgM2KmW6v3u', title: 'Angular Tips & Tricks', provider: 'youtube'  }
  ],
  author: {
    id: 'a1',
    username: 'jdupont',
    firstName: 'Jean',
    lastName: 'Dupont',
    avatar: 'https://i.pravatar.cc/100?img=1'
  },
  categories: [
    { id: 'cat1', name: 'Angular', slug: 'angular' },
    { id: 'cat2', name: 'Frontend', slug: 'frontend' }
  ],
  tags: [
    { id: 'tag1', name: 'release' },
    { id: 'tag2', name: 'standalone' }
  ],
  status: 'published',
  isPublished: true,
  publishedAt: new Date(),
  viewCount: 241,
  likeCount: 34,
  commentCount: 3,
  readingTime: 4,
  createdAt: new Date(),
  updatedAt: new Date()
}

];
