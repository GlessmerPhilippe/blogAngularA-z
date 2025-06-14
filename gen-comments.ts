const users = [
  { id: 'u1', username: 'alice', avatar: 'https://i.pravatar.cc/100?img=1' },
  { id: 'u2', username: 'bob', avatar: 'https://i.pravatar.cc/100?img=2' },
  { id: 'u3', username: 'charlie', avatar: 'https://i.pravatar.cc/100?img=3' },
  { id: 'u4', username: 'diana', avatar: 'https://i.pravatar.cc/100?img=4' },
  { id: 'u5', username: 'eva', avatar: 'https://i.pravatar.cc/100?img=5' },
];

const comments = [];
for (let a = 1; a <= 23; a++) {
  const nbComments = 2 + Math.floor(Math.random() * 2); // 2 ou 3 commentaires
  for (let c = 0; c < nbComments; c++) {
    const user = users[Math.floor(Math.random() * users.length)];
    comments.push({
      id: `c${a}${String.fromCharCode(97 + c)}`,
      articleId: String(a),
      author: user,
      content: [
        "Merci pour l'article !",
        "Super ressource, bravo 👏",
        "Je vais tester ça ce soir.",
        "Hâte de voir la suite.",
        "Tuto bien expliqué, merci !"
      ][Math.floor(Math.random() * 5)],
      createdAt: new Date(Date.now() - (Math.floor(Math.random() * 48) + 1) * 3600 * 1000)
    });
  }
}
console.log(JSON.stringify(comments, null, 2));
