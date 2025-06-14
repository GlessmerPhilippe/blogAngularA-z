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
    { id: 'tag1', name: 'release', slug: 'release' },
    { id: 'tag2', name: 'standalone', slug: 'standalone' }
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
,
  {
    id: '2',
    title: 'React 19 : Les nouveautés à ne pas manquer',
    slug: 'react-19-nouveautes',
    excerpt: 'Un tour d’horizon des nouveautés de React 19.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=2',
    images: [],
    videos: [],
    author: {
      id: 'a2',
      username: 'mlefevre',
      firstName: 'Marie',
      lastName: 'Lefevre',
      avatar: 'https://i.pravatar.cc/100?img=2'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 180,
    likeCount: 22,
    commentCount: 2,
    readingTime: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    title: 'Node.js 22 : Performances et sécurité',
    slug: 'nodejs-22-performances-securite',
    excerpt: 'Découvrez comment Node.js 22 améliore la sécurité.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=3',
    images: [],
    videos: [],
    author: {
      id: 'a3',
      username: 'pbernard',
      firstName: 'Paul',
      lastName: 'Bernard',
      avatar: 'https://i.pravatar.cc/100?img=3'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 120,
    likeCount: 15,
    commentCount: 1,
    readingTime: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '4',
    title: 'Vue 4 : Un framework toujours plus moderne',
    slug: 'vue-4-framework-moderne',
    excerpt: 'Vue 4 continue d’innover pour les développeurs front-end.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=4',
    images: [],
    videos: [],
    author: {
      id: 'a4',
      username: 'lmartin',
      firstName: 'Luc',
      lastName: 'Martin',
      avatar: 'https://i.pravatar.cc/100?img=4'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 98,
    likeCount: 12,
    commentCount: 0,
    readingTime: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '5',
    title: 'TypeScript 5.5 : Typage avancé et productivité',
    slug: 'typescript-5-5-typage-avance',
    excerpt: 'Les nouveautés de TypeScript 5.5 pour booster votre code.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=5',
    images: [],
    videos: [],
    author: {
      id: 'a5',
      username: 'cdupuis',
      firstName: 'Claire',
      lastName: 'Dupuis',
      avatar: 'https://i.pravatar.cc/100?img=5'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 110,
    likeCount: 18,
    commentCount: 2,
    readingTime: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '6',
    title: 'Découvrir Svelte : Le framework qui monte',
    slug: 'decouvrir-svelte-framework',
    excerpt: 'Pourquoi Svelte séduit de plus en plus de développeurs ?',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=6',
    images: [],
    videos: [],
    author: {
      id: 'a6',
      username: 'fmoreau',
      firstName: 'François',
      lastName: 'Moreau',
      avatar: 'https://i.pravatar.cc/100?img=6'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 95,
    likeCount: 10,
    commentCount: 1,
    readingTime: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '7',
    title: 'NestJS : L’architecture backend moderne',
    slug: 'nestjs-architecture-backend',
    excerpt: 'NestJS, un choix solide pour vos API Node.js.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=7',
    images: [],
    videos: [],
    author: {
      id: 'a7',
      username: 'gblanc',
      firstName: 'Gabriel',
      lastName: 'Blanc',
      avatar: 'https://i.pravatar.cc/100?img=7'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 130,
    likeCount: 16,
    commentCount: 2,
    readingTime: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '8',
    title: 'Décoder le CSS moderne',
    slug: 'decoder-css-moderne',
    excerpt: 'Flexbox, Grid, variables CSS : tout ce qu’il faut savoir.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=8',
    images: [],
    videos: [],
    author: {
      id: 'a8',
      username: 'srobert',
      firstName: 'Sophie',
      lastName: 'Robert',
      avatar: 'https://i.pravatar.cc/100?img=8'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 85,
    likeCount: 9,
    commentCount: 0,
    readingTime: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '9',
    title: 'API REST : Bonnes pratiques 2025',
    slug: 'api-rest-bonnes-pratiques-2025',
    excerpt: 'Les standards à suivre pour des API robustes.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=9',
    images: [],
    videos: [],
    author: {
      id: 'a9',
      username: 'jgirard',
      firstName: 'Julie',
      lastName: 'Girard',
      avatar: 'https://i.pravatar.cc/100?img=9'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 77,
    likeCount: 8,
    commentCount: 1,
    readingTime: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '10',
    title: 'Docker : Optimiser vos déploiements',
    slug: 'docker-optimiser-deploiements',
    excerpt: 'Astuces pour des images Docker plus légères.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=10',
    images: [],
    videos: [],
    author: {
      id: 'a10',
      username: 'tlambert',
      firstName: 'Thomas',
      lastName: 'Lambert',
      avatar: 'https://i.pravatar.cc/100?img=10'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 140,
    likeCount: 20,
    commentCount: 3,
    readingTime: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '11',
    title: 'Python 3.13 : Nouveautés et astuces',
    slug: 'python-3-13-nouveautes-astuces',
    excerpt: 'Ce que Python 3.13 apporte aux développeurs.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=11',
    images: [],
    videos: [],
    author: {
      id: 'a11',
      username: 'bpetit',
      firstName: 'Benoit',
      lastName: 'Petit',
      avatar: 'https://i.pravatar.cc/100?img=11'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 112,
    likeCount: 13,
    commentCount: 2,
    readingTime: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '12',
    title: 'SEO en 2025 : Les tendances à suivre',
    slug: 'seo-2025-tendances',
    excerpt: 'Comment rester visible sur Google en 2025 ?',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=12',
    images: [],
    videos: [],
    author: {
      id: 'a12',
      username: 'mcaron',
      firstName: 'Mathilde',
      lastName: 'Caron',
      avatar: 'https://i.pravatar.cc/100?img=12'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 90,
    likeCount: 11,
    commentCount: 1,
    readingTime: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '13',
    title: 'GitHub Copilot : L’IA au service du code',
    slug: 'github-copilot-ia-code',
    excerpt: 'Comment GitHub Copilot accélère le développement.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=13',
    images: [],
    videos: [],
    author: {
      id: 'a13',
      username: 'dlegrand',
      firstName: 'David',
      lastName: 'Legrand',
      avatar: 'https://i.pravatar.cc/100?img=13'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 105,
    likeCount: 14,
    commentCount: 2,
    readingTime: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '14',
    title: 'WebAssembly : Vers des apps ultra-rapides',
    slug: 'webassembly-apps-ultra-rapides',
    excerpt: 'WebAssembly révolutionne les performances web.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=14',
    images: [],
    videos: [],
    author: {
      id: 'a14',
      username: 'hbarbier',
      firstName: 'Hélène',
      lastName: 'Barbier',
      avatar: 'https://i.pravatar.cc/100?img=14'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 99,
    likeCount: 12,
    commentCount: 1,
    readingTime: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '15',
    title: 'Progressive Web Apps : Le futur du mobile',
    slug: 'pwa-futur-mobile',
    excerpt: 'Pourquoi miser sur les Progressive Web Apps ?',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=15',
    images: [],
    videos: [],
    author: {
      id: 'a15',
      username: 'jroux',
      firstName: 'Julien',
      lastName: 'Roux',
      avatar: 'https://i.pravatar.cc/100?img=15'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 87,
    likeCount: 10,
    commentCount: 1,
    readingTime: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '16',
    title: 'GraphQL : Simplifier vos requêtes API',
    slug: 'graphql-simplifier-requetes-api',
    excerpt: 'GraphQL, l’alternative moderne à REST.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=16',
    images: [],
    videos: [],
    author: {
      id: 'a16',
      username: 'vdelattre',
      firstName: 'Valérie',
      lastName: 'Delattre',
      avatar: 'https://i.pravatar.cc/100?img=16'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 93,
    likeCount: 11,
    commentCount: 1,
    readingTime: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '17',
    title: 'Next.js 15 : SSR et performances',
    slug: 'nextjs-15-ssr-performances',
    excerpt: 'Next.js 15 repousse les limites du SSR.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=17',
    images: [],
    videos: [],
    author: {
      id: 'a17',
      username: 'fperrin',
      firstName: 'Franck',
      lastName: 'Perrin',
      avatar: 'https://i.pravatar.cc/100?img=17'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 101,
    likeCount: 13,
    commentCount: 2,
    readingTime: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '18',
    title: 'Astro : Le site statique nouvelle génération',
    slug: 'astro-site-statique',
    excerpt: 'Astro, pour des sites ultra-rapides et modernes.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=18',
    images: [],
    videos: [],
    author: {
      id: 'a18',
      username: 'emarchand',
      firstName: 'Emma',
      lastName: 'Marchand',
      avatar: 'https://i.pravatar.cc/100?img=18'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 80,
    likeCount: 9,
    commentCount: 1,
    readingTime: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '19',
    title: 'Tailwind CSS : Booster votre productivité',
    slug: 'tailwind-css-productivite',
    excerpt: 'Tailwind CSS, le framework utilitaire qui cartonne.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=19',
    images: [],
    videos: [],
    author: {
      id: 'a19',
      username: 'nlemoine',
      firstName: 'Nicolas',
      lastName: 'Lemoine',
      avatar: 'https://i.pravatar.cc/100?img=19'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 88,
    likeCount: 10,
    commentCount: 1,
    readingTime: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '20',
    title: 'Bun : Le runtime JavaScript ultra-rapide',
    slug: 'bun-runtime-javascript',
    excerpt: 'Bun, la nouvelle star des runtimes JS.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=20',
    images: [],
    videos: [],
    author: {
      id: 'a20',
      username: 'sgauthier',
      firstName: 'Samuel',
      lastName: 'Gauthier',
      avatar: 'https://i.pravatar.cc/100?img=20'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 75,
    likeCount: 8,
    commentCount: 1,
    readingTime: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '21',
    title: 'Remix : Le framework fullstack réactif',
    slug: 'remix-framework-fullstack',
    excerpt: 'Remix, pour des apps web réactives et modernes.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=21',
    images: [],
    videos: [],
    author: {
      id: 'a21',
      username: 'lrenaud',
      firstName: 'Laura',
      lastName: 'Renaud',
      avatar: 'https://i.pravatar.cc/100?img=21'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 82,
    likeCount: 9,
    commentCount: 1,
    readingTime: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '22',
    title: 'Deno : Sécurité et simplicité pour JavaScript',
    slug: 'deno-securite-simplicite',
    excerpt: 'Deno, l’alternative moderne à Node.js.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=22',
    images: [],
    videos: [],
    author: {
      id: 'a22',
      username: 'mbaron',
      firstName: 'Maxime',
      lastName: 'Baron',
      avatar: 'https://i.pravatar.cc/100?img=22'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 70,
    likeCount: 7,
    commentCount: 1,
    readingTime: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '23',
    title: 'Jamstack : Architecture web moderne',
    slug: 'jamstack-architecture-web',
    excerpt: 'Jamstack, pour des sites rapides et sécurisés.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=23',
    images: [],
    videos: [],
    author: {
      id: 'a23',
      username: 'cguillon',
      firstName: 'Camille',
      lastName: 'Guillon',
      avatar: 'https://i.pravatar.cc/100?img=23'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 65,
    likeCount: 6,
    commentCount: 0,
    readingTime: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '24',
    title: 'Web3 : L’avenir décentralisé du web',
    slug: 'web3-avenir-decentralise',
    excerpt: 'Web3, blockchain et décentralisation expliqués.',
    content: '',
    featuredImage: 'https://picsum.photos/300/200?random=24',
    images: [],
    videos: [],
    author: {
      id: 'a24',
      username: 'rfontaine',
      firstName: 'Romain',
      lastName: 'Fontaine',
      avatar: 'https://i.pravatar.cc/100?img=24'
    },
    categories: [
      { id: 'cat1', name: 'Angular', slug: 'angular' },
      { id: 'cat2', name: 'Frontend', slug: 'frontend' }
    ],
    tags: [
      { id: 'tag1', name: 'release', slug: 'release' },
      { id: 'tag2', name: 'standalone', slug: 'standalone' }
    ],
    status: 'published',
    isPublished: true,
    publishedAt: new Date(),
    viewCount: 60,
    likeCount: 5,
    commentCount: 0,
    readingTime: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];
