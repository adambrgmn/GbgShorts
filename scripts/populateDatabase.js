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
    img: 'https://res.cloudinary.com/adambrgmn/image/upload/c_lfill,w_1100/v1485974209/gbgshorts/60_qkbhhv.png',
    published: false,
  },
  {
    html: '<p>Fem ljus i tårtan för Gbg Shorts. Fyra glada arrangörer. Ett husband. Tjugofem spänn för ölen. Ett femtiotal vackra små kortfilmer har hittills gjorts exklusivt för festivalen. Och nu är det din tur att skicka in din roliga, sorgliga, surrealistiska, provocerande, konstiga film.</p><p>9 april 2016 hos Hey it\'s Enrico Pallazzo, hållplats Vagnhallen Majorna. Senast 2 april vill vi ha din film.</p>',
    time: new Date('2016-02-05T09:06:40.000Z').getTime(),
    title: 'Hurra för fem goda år',
    video: 149551743,
    img: 'https://res.cloudinary.com/adambrgmn/image/upload/c_lfill,w_1100/v1485974209/gbgshorts/gbgshorts-2017_strcjz.png',
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
    html: '<p>Det är lika nervöst varje år. Festivalen står ju lite och faller på att publiken (du!) skickar in filmer så att vi har något att visa. Annars står vi där med vårt husband, vårt dessertvin och våra rödgråtna ögon. Det har gått alldeles utmärkt alla andra år, så vi litar på att det löser sig den här gången också. I år firar vi dessutom sexårsjubileum. Man vet aldrig vilket år som är det sista, så det gäller att fira stort varje år.</p><p>Gör en film helt ensam eller dra ihop ett gäng och gör det tillsammans. Filma med en proffsig systemkamera eller med mobilen. Så ses vi den 22 april!</p>',
    img: 'https://res.cloudinary.com/adambrgmn/image/upload/c_lfill,w_1100/v1485974209/gbgshorts/34.png',
    time: Date.now() - 10000,
    title: 'Det blir ett år i år också',
    published: true,
  },
  {
    html: '<p><em>Hur deltar jag?</em><br />Du deltar genom att göra en kortfilm som du skickar till <a href="mailto:gbgshorts@gmail.com">gbgshorts@gmail.com</a> (gärna via Dropbox eller liknande).</p><p><em>Vad krävs för att min film ska accepteras?</em><br />Din film ska vara högst 5 minuter lång och gjord exklusivt för Gbg Shorts. Filmen måste innehålla dialog och vara gjord helt utan finansiering.</p><p><em>Får man komma utan att ha gjort film?</em><br />Kanske. Men det är roligare om man har gjort film. Dessutom är man garanterad en biljett då. Övriga får komma i mån av plats. Man kan förköpa biljetter genom att maila till <a href="mailto:gbgshorts@gmail.com">gbgshorts@gmail.com</a>. Det är först till kvarn som gäller. Blir det biljetter över kommer man även kunna köpa i dörren.</p><p><em>Vad kostar biljetten?</em><br />Den kostar 100 kr för alla inklusive filmskaparna.</p><p><em>Var och när?</em><br />Vi håller till i garaget hos Hey, it’s Enrico Pallazzo. Du hoppar av vid Vagnhallen Majorna och går ner mot Röda Sten. Dörrarna öppnas 19.00. Filmvisningarna börjar 20.30. När filmerna börjar stängs dörrarna, så kom i tid!</p>',
    img: 'https://res.cloudinary.com/adambrgmn/image/upload/c_lfill,w_1100/v1485974209/gbgshorts/gbgshorts-2017.png',
    time: Date.now(),
    title: 'Bra att veta inför 22 april',
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
