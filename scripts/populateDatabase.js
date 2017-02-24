const firebase = require('firebase');

try {
  const config = {
    apiKey: process.env.FB_API,
    authDomain: 'gbgshorts.firebaseapp.com',
    databaseURL: 'https://gbgshorts.firebaseio.com',
  };

  firebase.initializeApp(config);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

const data = [
  {
    html: '<p>Kära vänner. Vi kommer med glädjens budskap. Den 9 april 2016 kör vi igen, och det är som vanligt din film vi vill visa! Precis som tidigare år håller vi till hos Hey it’s Enrico Pallazzo.</p>',
    imgs: [],
    time: new Date('2015-11-26T19:00:00.000Z').getTime(),
    title: 'Ett år till av glädje och hemmagjord kortfilm',
    img: 'https://res.cloudinary.com/adambrgmn/image/upload/c_lfill,w_550/v1485974209/gbgshorts/5.png',
    published: false,
  },
  {
    html: '<p>Fem ljus i tårtan för Gbg Shorts. Fyra glada arrangörer. Ett husband. Tjugofem spänn för ölen. Ett femtiotal vackra små kortfilmer har hittills gjorts exklusivt för festivalen. Och nu är det din tur att skicka in din roliga, sorgliga, surrealistiska, provocerande, konstiga film.</p><p>9 april 2016 hos Hey it\'s Enrico Pallazzo, hållplats Vagnhallen Majorna. Senast 2 april vill vi ha din film.</p>',
    time: new Date('2016-02-05T09:06:40.000Z').getTime(),
    title: 'Hurra för fem goda år',
    video: 149551743,
    img: 'https://res.cloudinary.com/adambrgmn/image/upload/c_lfill,w_550/v1485974209/gbgshorts/gbgshorts-1.png',
    published: false,
  },
  {
    html: '<p>På lördag är det dags igen för ännu en upplaga av Gbg Shorts!</p><p>Vi öppnar portarna klockan 19. För att få komma in måste ni ha skrivit upp er <a href=\'https://thewayin.gbgshorts.se/\'>här</a>.</p><p>Tänk på att komma i tid så att du hinner med lite soppa också</p>',
    img: 'https://res.cloudinary.com/adambrgmn/image/upload/c_lfill,w_550/v1485974209/gbgshorts/gs_webb_02.png',
    time: new Date('2016-04-07T12:26:23.246Z').getTime(),
    title: 'På lördag är det dags!',
    published: false,
  },
  {
    html: '<p>Vi ses säkert snart igen. Ett särskilt tack till alla som skickade in filmer. Utan er inget Gbg Shorts!</p>',
    img: 'https://res.cloudinary.com/adambrgmn/image/upload/c_lfill,w_550/v1485974209/gbgshorts/gbgshorts-3.png',
    time: new Date('2016-04-11T10:00:00.000Z').getTime(),
    title: 'Tack för den här gången',
    published: false,
  },
  {
    html: '<p>Tbh pinterest umami keffiyeh fanny pack. Kickstarter microdosing small batch, authentic actually ramps kitsch vice. Sapiente slow-carb hexagon anim blog tacos, qui labore in. Tumeric swag ullamco, kogi selvage VHS snackwave meggings pitchfork velit af cliche shoreditch. Prism 90\'s trust fund, sed fanny pack umami glossier microdosing. Meggings cred pickled, seitan hexagon chartreuse authentic woke adipisicing poutine succulents messenger bag.</p><p>Stumptown leggings jean shorts coloring book craft beer, photo booth lyft migas. Meditation blue bottle umami vexillologist, crucifix roof party lyft thundercats af quis ex austin. Austin shabby chic labore thundercats. Wolf roof party wayfarers street art, anim sustainable locavore williamsburg sed est tacos mixtape. Tbh next level quinoa tumeric. Coloring book iPhone laborum messenger bag minim. Skateboard esse green juice, nesciunt 90\'s bicycle rights williamsburg fashion axe.</p><p>Eu hashtag fingerstache bushwick, deep v selfies bitters ennui next level aliquip try-hard hot chicken hammock minim. Ramps sapiente seitan shabby chic +1, distillery pok pok woke copper mug meditation keytar gluten-free. Yr letterpress occupy sed laborum, assumenda cold-pressed organic pok pok vexillologist PBR&B mixtape venmo meggings.</p>',
    img: 'https://res.cloudinary.com/adambrgmn/image/upload/c_lfill,w_550/v1485974209/gbgshorts/gbgshorts-2017.png',
    time: Date.now(),
    title: 'Hur lång måste en bloggrubrik vara',
    background: '#d8c0c0',
    published: true,
  },
];

const posts = firebase.database().ref('v2/posts/posts');
const published = firebase.database().ref('v2/posts/published');

data.forEach((item) => {
  const postsRef = posts.push();
  console.log(`Writing "${item.title}" to Firebase with key ${postsRef.key}`);

  postsRef.set({
    key: postsRef.key,
    title: item.title,
    html: item.html,
    meta: {
      published: item.published,
      publishedAt: item.time,
      updatedAt: firebase.database.ServerValue.TIMESTAMP,
    },
    img: item.img || null,
    video: item.video || null,
    background: item.background || null,
  });

  published.child(postsRef.key).set(item.published);
});
