angular.module('jsmnApp').value('songData', {
  artists: [
    {
      key: 'valerie-june',
      name: 'Valerie June',
      songs: [],
    },
    {
      key: 'kurt-vile',
      name: 'Kurt Vile',
      songs: [],
    },
    {
      key: 'dessa',
      name: 'Dessa',
      songs: [
        {
          key: 'overrated-song-1',
          name: 'Overrated Song #1',
          lyrics: '',
        },
        {
          key: 'overrated-song-2',
          name: 'Overrated Song #2',
          lyrics: '',
        },
        {
          key: 'okay-song',
          name: 'Okay Song',
          lyrics: '[ Guest vocals ]',
        }
      ],
    },
    {
      key: 'gbv',
      name: 'Guided By Voices',
      songs: [
        {
          key: 'game-of-pricks',
          name: 'Game of Pricks',
          lyrics: '',
        },
        {
          key: 'teenage-fbi',
          name: 'Teenage FBI',
          lyrics: '',
        },
        {
          key: 'i-am-a-scientist',
          name: 'I am a Scientist',
          lyrics: [
             "<br>I am a scientist - I seek to understand me",
             "<br>All of my impurities and evils yet unknown",
             "<br>I am a journalist - I write to you to show you",
             "<br>I am an incurable and nothing else behaves like me",
             "<br>",
             "<br>And I know what's right",
             "<br>But I'm losing sight of the clues",
             "<br>For which I search and choose to abuse",
             "<br>To just unlock my mind",
             "<br>Yeah just unlock my mind",
             "<br>",
             "<br>I am a pharmacist - prescriptions I will fill you",
             "<br>Potions pills and medicines to ease your painful lives",
             "<br>I am a lost soul, I shoot myself with rock &amp; roll",
             "<br>The hole I dig is bottomless but nothing else can set me free",
             "<br>",
             "<br>And I know what's right",
             "<br>But I'm losing sight of the clues",
             "<br>For which I search and choose to abuse",
             "<br>To just unlock my mind",
             "<br>Yeah just unlock my mind",
             "<br>",
             "<br>I am a scientist - I seek to understand me",
             "<br>I am an incurable and nothing else behaves like me",
             "<br>",
             "<br>Everything is right",
             "<br>Everything works out right",
             "<br>Everything fades from sight",
             "<br>Because that's alright with me"
          ].join('\n'),
        }
      ],
    },
    {
      key: 'spoon',
      name: 'Spoon',
      songs: [],
    }
  ],

  albums: [
    {
      key: 'bee-thousand',
      name: 'Bee Thousand',
      songs: [],
    },
    {
      key: 'alien-lanes',
      name: 'Alien Lanes',
      songs: [],
    }
  ],
});
